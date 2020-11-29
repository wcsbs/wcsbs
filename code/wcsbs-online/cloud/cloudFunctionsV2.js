/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const MASTER_KEY = { useMasterKey: true };
const MAX_QUERY_COUNT = 3000;
const logger = require("parse-server").logger;
const commonFunctions = require("./commonFunctions.js");
const loadStudentAttendanceV2 = commonFunctions.loadStudentAttendanceV2;
const requireAuth = commonFunctions.requireAuth;
const requireRole = commonFunctions.requireRole;

const loadPracticeSubmodules = async function(moduleId) {
  if (moduleId) {
    var query = new Parse.Query("Submodule");
    query.equalTo("moduleId", moduleId);
    query.ascending("index");
    var practiceSubmodules = await query.limit(MAX_QUERY_COUNT).find();
    return practiceSubmodules.map(e => {
      return { id: e.id, name: e.get("name"), url: e.get("url") };
    });
  }
  return [];
};

const loadStudentPracticeDetailsV2 = async function(
  userId,
  classInfo,
  practices
) {
  logger.info(`loadStudentPracticeDetailsV2 - userId: ${userId}`);

  if (practices && practices.length > 0) {
    for (var i = 0; i < practices.length; i++) {
      var practiceCount = {};
      var relation = practices[i].relation("counts");
      var query = relation.query();
      query.equalTo("userId", userId);
      query.equalTo("reportedAt", undefined);
      const accumulatedCount = await query.first();

      if (accumulatedCount) {
        query = relation.query();
        query.equalTo("userId", userId);
        // query.greaterThan("count", 0);
        query.descending("reportedAt");
        const latestCount = await query.first();

        practiceCount.count = latestCount.get("count");
        practiceCount.reportedAt = latestCount.get("reportedAt");
        practiceCount.accumulatedCount = accumulatedCount.get("count");
      }
      classInfo.counts.push(practiceCount);

      const moduleId = practices[i].get("moduleId");
      var practiceSubmodules = await loadPracticeSubmodules(moduleId);
      classInfo.practiceSubmodules.push(practiceSubmodules);
    }
  }
};

const generateClassSnapshotJsonV2 = async function(parseClass) {
  logger.info(`generateClassSnapshotJsonV2 - classId: ${parseClass.id}`);

  const result = {};
  var query = parseClass.relation("students").query();
  result.studentCount = await query.count();

  const sessions = parseClass.relation("sessionsV2");
  query = sessions.query();
  result.sessionScheduled = await query.count();

  query = sessions.query();
  query.exists("scheduledAt");
  query.lessThanOrEqualTo("scheduledAt", new Date());
  result.sessionCompleted = await query.count();
  result.reportedAt = new Date();

  return result;
};

const generateSessionSnapshotJsonV2 = async function(parseSession) {
  logger.info(`generateSessionSnapshotJsonV2 - sessionId: ${parseSession.id}`);

  var query = new Parse.Query("UserSessionAttendance");
  query.equalTo("sessionId", parseSession.id);
  query.equalTo("attendance", true);
  const attendance = await query.count();

  const studyRecords = [];
  const content = parseSession.get("content");
  for (var i = 0; i < content.submodules.length; i++) {
    const submoduleId = content.submodules[i];
    const studyRecord = {};
    query = new Parse.Query("UserStudyRecord");
    query.equalTo("submoduleId", submoduleId);
    query.equalTo("lineage", true);
    studyRecord.lineage = await query.count();

    query = new Parse.Query("UserStudyRecord");
    query.equalTo("submoduleId", submoduleId);
    query.equalTo("textbook", true);
    studyRecord.textbook = await query.count();

    studyRecords.push(studyRecord);
  }

  return { attendance, studyRecords, reportedAt: new Date() };
};

const generatePracticeSnapshotJsonV2 = async function(parsePractice) {
  logger.info(
    `generatePracticeSnapshotJsonV2 - practiceId: ${parsePractice.id}`
  );

  const relation = parsePractice.relation("counts");
  const query = relation.query();
  query.equalTo("reportedAt", undefined);
  const counts = await query.limit(MAX_QUERY_COUNT).find();

  var accumulatedCount = 0;
  for (var i = 0; i < counts.length; i++) {
    accumulatedCount += counts[i].get("count");
  }
  logger.info(
    `generatePracticeSnapshotJsonV2 - accumulatedCount: ${accumulatedCount}`
  );
  return { accumulatedCount, reportedAt: new Date() };
};

const loadSnapshotV2 = async function(parseObject, generateSnapshotJson) {
  const objectId = parseObject.id;
  logger.info(`loadSnapshotV2 - objectId: ${objectId}`);

  var query = new Parse.Query("Snapshot");
  query.equalTo("forObjectId", objectId);
  var snapshot = await query.first();

  var needToRegenerate = true;

  if (!snapshot) {
    snapshot = new Parse.Object("Snapshot");
    snapshot.set("forObjectId", objectId);
  } else {
    const today = new Date();
    //refresh every 1/2 hour
    needToRegenerate =
      today.getTime() > snapshot.updatedAt.getTime() + (1 * 60 * 60 * 1000) / 2;
  }

  if (needToRegenerate) {
    const value = await generateSnapshotJson(parseObject);
    snapshot.set("value", value);
    snapshot = await snapshot.save(null, MASTER_KEY);
  }

  return snapshot.get("value");
};

const loadPracticeSnapshotsV2 = async function(practices) {
  logger.info(`loadPracticeSnapshots - practices: ${practices}`);

  var result = [];
  if (practices && practices.length > 0) {
    for (var i = 0; i < practices.length; i++) {
      const practiceCount = await loadSnapshotV2(
        practices[i],
        generatePracticeSnapshotJsonV2
      );
      result.push(practiceCount);
    }
  }

  return result;
};

const loadUserStudyRecord = async function(userId, submoduleId) {
  logger.info(
    `loadUserStudyRecord - userId: ${userId} submoduleId: ${submoduleId}`
  );

  var result = {};
  var query = new Parse.Query("UserStudyRecord");
  query.equalTo("userId", userId);
  query.equalTo("submoduleId", submoduleId);
  var record = await query.first();

  if (record) {
    result.lineage = record.get("lineage");
    result.textbook = record.get("textbook");
  }
  return result;
};

const loadClassSessionDetails = async function(
  userId,
  classInfo,
  classSession,
  forStudent
) {
  if (classSession) {
    classInfo.classSessions.push(classSession);
    var attendance;
    if (forStudent) {
      attendance = await loadStudentAttendanceV2(userId, classSession);
    } else {
      attendance = await loadSnapshotV2(
        classSession,
        generateSessionSnapshotJsonV2
      );
    }
    logger.info(
      `loadSessionDetails - attendance: ${JSON.stringify(attendance)}`
    );

    const submodules = [];
    const content = classSession.get("content");
    for (var i = 0; i < content.submodules.length; i++) {
      const submoduleId = content.submodules[i];
      const submodule = {};
      var query = new Parse.Query("Submodule");
      query.equalTo("objectId", submoduleId);
      const parseSubmodule = await query.first();

      if (parseSubmodule) {
        submodule.id = submoduleId;
        submodule.index = parseSubmodule.get("index");
        submodule.name = parseSubmodule.get("name");
        submodule.url = parseSubmodule.get("url");
        submodule.moduleId = parseSubmodule.get("moduleId");
        submodule.studyRecord = forStudent
          ? await loadUserStudyRecord(userId, submoduleId)
          : attendance.studyRecords[i];
        submodules.push(submodule);
      }
    }
    logger.info(
      `loadSessionDetails - submodules: ${JSON.stringify(submodules)}`
    );

    classInfo.sessionDetails.push({ attendance, submodules });
  }
};

const loadUserRoles = async function(parseUser) {
  var userRoleQuery = new Parse.Query(Parse.Role);
  userRoleQuery.equalTo("users", parseUser);
  const roles = await userRoleQuery.find(MASTER_KEY);
  return roles.length > 0 ? roles.map(r => r.get("name")) : ["StudentUser"];
};

const loadClassTeachers = async function(parseClass) {
  const teachers = [];
  var query = parseClass.relation("classAdminUsers").query();
  var classAdminUsers = await query.find();
  for (var i = 0; i < classAdminUsers.length; i++) {
    const parseUser = classAdminUsers[i];
    const roles = await loadUserRoles(parseUser);

    if (roles.includes("TeacherUser")) {
      teachers.push(parseUser.get("name"));
    }
  }

  return teachers;
};

const loadDashboardV2 = async function(parseUser, forStudent) {
  const userId = parseUser ? parseUser._getId() : undefined;
  const dashboard = forStudent
    ? {
        enrolledClasses: [],
        newClasses: []
      }
    : {
        classes: []
      };

  var query = new Parse.Query("Class");

  var canDownloadReports = true;
  //undefined if loading System Admin Dashboard
  if (parseUser) {
    if (forStudent) {
      query.equalTo("students", parseUser);
      canDownloadReports = false;
    } else {
      query.equalTo("classAdminUsers", parseUser);
    }
  }

  var parseClasses = await query.find();

  const enrolledClassList = [];

  for (var i = 0; i < parseClasses.length; i++) {
    const parseClass = parseClasses[i];
    const classInfo = {
      id: parseClass._getId(),
      name: parseClass.get("name"),
      url: parseClass.get("url"),
      classSessions: [],
      sessionDetails: [],
      practices: [],
      counts: [],
      practiceSubmodules: [],
      canDownloadReports
    };
    enrolledClassList.push(parseClass._getId());

    classInfo.teachers = await loadClassTeachers(parseClass);

    if (!canDownloadReports) {
      var metaData = parseClass.get("metaData");
      if (metaData) {
        classInfo.canDownloadReports = metaData.adminStudentIds.includes(
          parseUser.id
        );
      }
      if (!classInfo.canDownloadReports) {
        query = new Parse.Query("Team");
        query.equalTo("leaderId", parseUser.id);
        query.equalTo("classId", parseClass.id);
        const team = await query.first();
        if (team) {
          classInfo.canDownloadReports = team.id;
        }
      }
    }

    query = parseClass.relation("sessionsV2").query();
    var d = new Date();
    query.greaterThan("scheduledAt", d);
    query.ascending("scheduledAt");
    const nextSession = await query.first();
    await loadClassSessionDetails(userId, classInfo, nextSession, forStudent);

    query = parseClass.relation("sessionsV2").query();
    query.lessThanOrEqualTo("scheduledAt", d);
    query.descending("scheduledAt");
    const lastSession = await query.first();
    await loadClassSessionDetails(userId, classInfo, lastSession, forStudent);

    query = parseClass.relation("practices").query();
    query.ascending("index");
    classInfo.practices = await query.find();

    if (forStudent) {
      await loadStudentPracticeDetailsV2(
        userId,
        classInfo,
        classInfo.practices
      );
    } else {
      classInfo.counts = await loadPracticeSnapshotsV2(classInfo.practices);
      classInfo.classSnapshot = await loadSnapshotV2(
        parseClass,
        generateClassSnapshotJsonV2
      );
    }

    if (forStudent) {
      dashboard.enrolledClasses.push(classInfo);
    } else {
      dashboard.classes.push(classInfo);
    }
  }

  if (forStudent) {
    query = new Parse.Query("Class");
    query.equalTo("openForApplication", true);
    query.notContainedIn("objectId", enrolledClassList);
    parseClasses = await query.find();

    for (i = 0; i < parseClasses.length; i++) {
      const parseClass = parseClasses[i];
      const classInfo = {
        id: parseClass.id,
        name: parseClass.get("name"),
        url: parseClass.get("url")
      };

      classInfo.teachers = await loadClassTeachers(parseClass);
      dashboard.newClasses.push(classInfo);
    }
  }

  return dashboard;
};

Parse.Cloud.define(
  "home:loadDashboardsV2",
  async ({ user, params: { user: userWithRoles } }) => {
    requireAuth(user);

    const result = {};
    if (userWithRoles.roles.includes("StudentUser")) {
      result.studentDashboard = await loadDashboardV2(user, true);
    }

    if (userWithRoles.roles.includes("ClassAdminUser")) {
      result.classAdminDashboard = await loadDashboardV2(user, false);
    }

    if (userWithRoles.roles.includes("B4aAdminUser")) {
      result.systemAdminDashboard = await loadDashboardV2();
    }

    return result;
  }
);

Parse.Cloud.define(
  "home:updateAttendanceV2",
  async ({ user, params: { classId, sessionId, attendance } }) => {
    return await commonFunctions.updateAttendanceV2(
      user,
      classId,
      sessionId,
      attendance
    );
  }
);

Parse.Cloud.define(
  "home:reportPracticeCountV2",
  async ({
    user,
    params: { practiceId, reportedAt, count, practiceSessions }
  }) => {
    return await commonFunctions.reportPracticeCountV2(
      user,
      practiceId,
      reportedAt,
      count,
      practiceSessions
    );
  }
);

Parse.Cloud.define(
  "class:fetchPracticeCountsV2",
  async ({ user, params: { practiceId, forAdmin } }) => {
    requireAuth(user);

    const userId = user.id;
    logger.info(
      `class:fetchPracticeCountsV2 - userId: ${userId} practiceId: ${practiceId} forAdmin: ${forAdmin}`
    );

    var query = new Parse.Query("Practice");
    query.equalTo("objectId", practiceId);
    const practice = await query.first();

    query = new Parse.Query("Class");
    query.equalTo("practices", practice);
    const parseClass = await query.first();

    const result = {
      forAdmin: forAdmin,
      practice: practice,
      counts: [],
      users: [],
      practiceSubmodules: []
    };
    var relation = practice.relation("counts");

    query = relation.query();
    if (forAdmin) {
      query.equalTo("reportedAt", undefined);
      query.descending("count");
    } else {
      query.equalTo("userId", userId);
      query.descending("reportedAt");
      query.notEqualTo("count", null);
    }
    const parseCounts = await query.limit(MAX_QUERY_COUNT).find();

    if (forAdmin) {
      for (var i = 0; i < parseCounts.length; i++) {
        var userQuery = parseClass.relation("students").query();
        userQuery.equalTo("objectId", parseCounts[i].get("userId"));
        const parseUser = await userQuery.first();

        if (parseUser) {
          result.users.push(parseUser.get("name"));
          result.counts.push(parseCounts[i]);
        }
      }
    } else {
      const moduleId = practice.get("moduleId");
      result.practiceSubmodules = await loadPracticeSubmodules(moduleId);
      result.counts = parseCounts;

      if (moduleId) {
        result.practiceSessions = [];
        for (i = 0; i < parseCounts.length; i++) {
          relation = parseCounts[i].relation("practiceSessions");
          query = relation.query();
          query.ascending("index");
          var parsePracticeSessions = await query.limit(MAX_QUERY_COUNT).find();
          result.practiceSessions.push(parsePracticeSessions);
        }
      }
    }

    return result;
  }
);

const loadNewSessions = async function(parseClass, classInfo) {
  var submoduleIds = [];
  for (var i = 0; i < classInfo.sessionDetails.length; i++) {
    for (var j = 0; j < classInfo.sessionDetails[i].submodules.length; j++) {
      submoduleIds.push(classInfo.sessionDetails[i].submodules[j].id);
    }
  }

  classInfo.modules = [];
  var query = parseClass.relation("modules").query();
  query.ascending("index");
  const modules = await query.limit(MAX_QUERY_COUNT).find();

  for (i = 0; i < modules.length; i++) {
    query = new Parse.Query("Submodule");
    query.equalTo("moduleId", modules[i].id);
    query.notContainedIn("objectId", submoduleIds);
    query.ascending("index");
    const parseSubmodules = await query.limit(MAX_QUERY_COUNT).find();

    classInfo.modules.push({
      id: modules[i].id,
      name: modules[i].get("name"),
      newSubmodules: parseSubmodules.map(e => {
        return {
          id: e.id,
          index: e.get("index"),
          name: e.get("name"),
          url: e.get("url"),
          moduleId: e.get("moduleId")
        };
      })
    });
  }
};

Parse.Cloud.define(
  "class:fetchSessionsV2",
  async ({
    user,
    params: { classId, forApplication, forAdmin, loadingNewSessions }
  }) => {
    requireAuth(user);

    var query = new Parse.Query("Class");
    query.equalTo("objectId", classId);
    const parseClass = await query.first();

    const classInfo = {
      id: parseClass._getId(),
      name: parseClass.get("name"),
      url: parseClass.get("url"),
      singleSubmodule: parseClass.get("singleSubmodule"),
      forApplication: forApplication,
      forAdmin: forAdmin,
      classSessions: [],
      sessionDetails: []
    };

    query = parseClass.relation("sessionsV2").query();
    query.descending("scheduledAt");
    const classSessions = await query.limit(MAX_QUERY_COUNT).find();

    for (var i = 0; i < classSessions.length; i++) {
      await loadClassSessionDetails(
        user.id,
        classInfo,
        classSessions[i],
        !forAdmin
      );
    }

    if (loadingNewSessions) {
      await loadNewSessions(parseClass, classInfo);
    }

    return classInfo;
  }
);

Parse.Cloud.define(
  "class:updateClassSessionV2",
  async ({ user, params: { session } }) => {
    requireAuth(user);

    logger.info(
      `updateClassSessionV2 - userId: ${user.id} session: ${JSON.stringify(
        session
      )}`
    );

    var classSession;
    var newSession;

    if (session.id) {
      var query = new Parse.Query("ClassSessionV2");
      query.equalTo("objectId", session.id);
      classSession = await query.first();
    } else {
      classSession = new Parse.Object("ClassSessionV2");
      newSession = true;
    }

    classSession.set("scheduledAt", session.scheduledAt);
    classSession.set("name", session.name);
    classSession.set("description", session.description);

    const submodules = session.submodules.map(e => e.id);
    classSession.set("content", { submodules, materials: session.materials });

    classSession = await classSession.save(null, MASTER_KEY);
    const result = { classSessionId: classSession.id };

    if (newSession) {
      query = new Parse.Query("Class");
      query.equalTo("objectId", session.classId);
      const parseClass = await query.first();
      result.classId = parseClass.id;

      const sessions = parseClass.relation("sessionsV2");
      sessions.add(classSession);
      await parseClass.save(null, MASTER_KEY);
    }

    return result;
  }
);

const getClassAdminStudents = async function(classAdminUsers) {
  const classAdminStudents = [];
  for (var i = 0; i < classAdminUsers.length; i++) {
    const parseUser = classAdminUsers[i];
    const roles = await loadUserRoles(parseUser);

    if (!roles.includes("TeacherUser")) {
      const member = {
        id: parseUser.id,
        name: parseUser.get("name"),
        roles
      };
      classAdminStudents.push(member);
    }
  }
  return classAdminStudents;
};

const loadTeams = async function(
  user,
  userWithRoles,
  classId,
  forAdmin,
  loadingExtra
) {
  requireAuth(user);

  var query = new Parse.Query("Class");
  query.equalTo("objectId", classId);
  const parseClass = await query.first();

  const classInfo = {
    id: parseClass.id,
    name: parseClass.get("name"),
    url: parseClass.get("url"),
    classTeams: [{ members: [] }],
    forAdmin
  };

  if (loadingExtra) {
    query = parseClass.relation("classAdminUsers").query();
    var classAdminUsers = await query.limit(MAX_QUERY_COUNT).find();
    classInfo.classAdminStudents = await getClassAdminStudents(classAdminUsers);

    var adminStudentIds;
    var metaData = parseClass.get("metaData");
    if (metaData) {
      adminStudentIds = metaData.adminStudentIds;
      const classAdminStudents = adminStudentIds.map(e => {
        return classInfo.classAdminStudents.find(s => s.id == e);
      });
      classInfo.classAdminStudents = classAdminStudents;
    } else {
      adminStudentIds = classInfo.classAdminStudents.map(e => e.id);
    }

    query = new Parse.Query(Parse.Role);
    query.equalTo("name", "ClassAdminUser");
    const parseRole = await query.first();

    query = parseRole.relation("users").query();
    query.notContainedIn("objectId", adminStudentIds);
    classAdminUsers = await query.limit(MAX_QUERY_COUNT).find();
    classInfo.classAdminCandidates = await getClassAdminStudents(
      classAdminUsers
    );
  }

  query = new Parse.Query("Team");
  query.equalTo("classId", classId);
  if (!forAdmin && !userWithRoles.roles.some(e => e == "ClassAdminUser")) {
    query.equalTo("leaderId", user.id);
  }
  query.ascending("index");
  const parseTeams = await query.limit(MAX_QUERY_COUNT).find();

  const studentAssignedInTeams = [];
  for (var i = 0; i < parseTeams.length; i++) {
    const parseTeam = parseTeams[i];
    const team = {
      id: parseTeam.id,
      name: parseTeam.get("name"),
      index: parseTeam.get("index"),
      classId: parseTeam.get("classId"),
      leader: undefined,
      members: []
    };

    const leaderId = parseTeam.get("leaderId");
    var membersOrder = parseTeam.get("membersOrder");
    if (membersOrder) {
      membersOrder = membersOrder.split(",");
    }
    // logger.info(`loadTeams - membersOrder: ${JSON.stringify(membersOrder)}`);

    if (membersOrder) {
      for (var j = 0; j < membersOrder.length; j++) {
        query = new Parse.Query("User");
        query.equalTo("objectId", membersOrder[j]);
        const parseUser = await query.first();

        const member = {
          id: parseUser.id,
          name: parseUser.get("name")
        };
        studentAssignedInTeams.push(member.id);

        if (member.id == leaderId) {
          team.leader = member;
        }

        team.members.push(member);
      }
    }
    classInfo.classTeams.push(team);
  }

  if (loadingExtra) {
    query = parseClass.relation("students").query();
    query.notContainedIn("objectId", studentAssignedInTeams);
    const classStudents = await query.limit(MAX_QUERY_COUNT).find();
    for (j = 0; j < classStudents.length; j++) {
      const member = {
        id: classStudents[j].id,
        name: classStudents[j].get("name")
      };
      classInfo.classTeams[0].members.push(member);
    }
  }

  return classInfo;
};

Parse.Cloud.define(
  "class:fetchTeams",
  async ({ user, params: { classId } }) => {
    return await loadTeams(user, undefined, classId, true, true);
  }
);

Parse.Cloud.define(
  "class:fetchStats",
  async ({
    user,
    params: { user: userWithRoles, classId, practiceId, forAdmin, lastWeek }
  }) => {
    const classInfo = await loadTeams(
      user,
      userWithRoles,
      classId,
      forAdmin,
      false
    );

    var query, relation;
    if (practiceId) {
      query = new Parse.Query("Practice");
      query.equalTo("objectId", practiceId);
      const practice = await query.first();
      classInfo.practiceId = practiceId;
      classInfo.practiceName = practice.get("name");
      classInfo.practiceModuleId = practice.get("moduleId");
      relation = practice.relation("counts");
    }

    for (var i = 0; i < classInfo.classTeams.length; i++) {
      const team = classInfo.classTeams[i];
      for (var j = 0; j < team.members.length; j++) {
        const member = team.members[j];
        member.count = 0;
        if (practiceId) {
          query = relation.query();
          query.equalTo("reportedAt", undefined);
          query.equalTo("userId", member.id);
          const parseCount = await query.first();
          if (parseCount) {
            member.count = parseCount.get("count");
            member.completed = parseCount.get("completed");
          }

          query = relation.query();
          query.equalTo("userId", member.id);
          query.greaterThanOrEqualTo("reportedAt", lastWeek.monday);
          query.lessThanOrEqualTo("reportedAt", lastWeek.sunday);
          const parseCounts = await query.limit(MAX_QUERY_COUNT).find();
          if (parseCounts.length) {
            member.lastWeek = 0;
            for (var k = 0; k < parseCounts.length; k++) {
              member.lastWeek += parseCounts[k].get("count");
            }
          }
        } else {
          query = new Parse.Query("UserActivityStats");
          var key = {
            userId: member.id,
            classId
          };
          key = JSON.stringify(key);
          query.equalTo("key", key);
          const stats = await query.first();
          if (stats) {
            member.count += stats.get("count");
          }

          query = new Parse.Query("Class");
          query.equalTo("objectId", classId);
          const parseClass = await query.first();

          query = parseClass.relation("sessionsV2").query();
          query.greaterThanOrEqualTo("scheduledAt", lastWeek.monday);
          query.lessThanOrEqualTo("scheduledAt", lastWeek.sunday);
          const lastSession = await query.first();
          if (!lastSession) {
            member.lastWeek = "放假";
          } else {
            const attendance = await loadStudentAttendanceV2(
              member.id,
              lastSession
            );
            member.lastWeek = "未报出席";
            if (attendance) {
              if (attendance.onLeave) {
                member.lastWeek = "请假";
              } else if (attendance.attendance == true) {
                member.lastWeek = "已上课";
              } else if (attendance.attendance == false) {
                member.lastWeek = "未上课";
              }
            }
          }
        }
      }
    }
    return classInfo;
  }
);

Parse.Cloud.define(
  "class:updateTeams",
  async ({
    user,
    params: { classId, classTeams, removedStudents, classAdminUserIds }
  }) => {
    requireAuth(user);

    var query = new Parse.Query("Class");
    query.equalTo("objectId", classId);
    var parseClass = await query.first();
    var metaData = parseClass.get("metaData");
    if (!metaData) {
      metaData = {};
    }
    metaData.adminStudentIds = [].concat(classAdminUserIds);
    parseClass.set("metaData", metaData);

    if (removedStudents.length > 0) {
      var relation = parseClass.relation("students");

      for (var i = 0; i < removedStudents.length; i++) {
        query = new Parse.Query("User");
        query.equalTo("objectId", removedStudents[i].id);
        relation.remove(await query.first());
      }
      parseClass = await parseClass.save(null, MASTER_KEY);
    }

    if (classAdminUserIds && classAdminUserIds.length > 0) {
      relation = parseClass.relation("classAdminUsers");
      query = relation.query();
      const classAdminUsers = await query.limit(MAX_QUERY_COUNT).find();

      for (i = 0; i < classAdminUsers.length; i++) {
        const parseClassAdminUser = classAdminUsers[i];
        const roles = await loadUserRoles(parseClassAdminUser);

        if (!roles.includes("TeacherUser")) {
          var toRemove = true;
          for (var j = 0; j < classAdminUserIds.length; j++) {
            if (classAdminUserIds[j] == parseClassAdminUser._getId()) {
              classAdminUserIds.splice(j, 1);
              toRemove = false;
              break;
            }
          }
          if (toRemove) {
            relation.remove(parseClassAdminUser);
          }
        }
      }

      for (i = 0; i < classAdminUserIds.length; i++) {
        if (classAdminUserIds[i]) {
          query = new Parse.Query("User");
          query.equalTo("objectId", classAdminUserIds[i]);
          relation.add(await query.first());
        }
      }

      await parseClass.save(null, MASTER_KEY);
    }

    query = new Parse.Query("Team");
    query.equalTo("classId", classId);
    var parseTeams = await query.limit(MAX_QUERY_COUNT).find();
    for (i = 0; i < parseTeams.length; i++) {
      await parseTeams[i].destroy();
    }

    var teams = [];

    for (i = 0; i < classTeams.length; i++) {
      const team = classTeams[i];
      var parseTeam = new Parse.Object("Team");
      parseTeam.set("classId", classId);
      parseTeam.set("index", i + 1);
      parseTeam.set("name", team.name);
      parseTeam = await parseTeam.save(null, MASTER_KEY);

      relation = parseTeam.relation("members");
      for (j = 0; j < team.members.length; j++) {
        query = new Parse.Query(Parse.User);
        query.equalTo("objectId", team.members[j].id);

        var parseUser = await query.first();
        if (parseUser) {
          if (j == 0) {
            parseTeam.set("leaderId", parseUser.id);
            parseTeam.set("membersOrder", parseUser.id);
          } else {
            parseTeam.set(
              "membersOrder",
              `${parseTeam.get("membersOrder")},${parseUser.id}`
            );
          }
          relation.add(parseUser);
        }
      }

      parseTeam = await parseTeam.save(null, MASTER_KEY);
      teams.push(parseTeam);
    }

    return teams;
  }
);

const loadDataForUser = async function(
  parseClass,
  parsePractice,
  parseUser,
  parseTeam,
  csvHeader,
  mapDates,
  parseCountList
) {
  var monthlyTotal = undefined;
  var yearlyTotal = 0;
  var grandTotal = 0;
  const userId = parseUser.id;
  const result = {};
  var lastDate;
  for (var i = 0; i < csvHeader.length; i++) {
    const key = csvHeader[i];
    if (i == 0) {
      result[key] = parseTeam.get("index").toString();
    } else if (i == 1) {
      result[key] = parseUser.get("name");
    } else {
      const date = mapDates[key];
      if (date) {
        var count = undefined;
        if (parsePractice) {
          var relation = parsePractice.relation("counts");

          let query = relation.query();
          query.equalTo("userId", userId);
          const reportedAt = date;
          reportedAt.setHours(16); //Assuming GMT+8
          query.lessThan("reportedAt", reportedAt);

          if (!lastDate) {
            lastDate = new Date(date.getFullYear(), 0, 1);
          }
          query.greaterThanOrEqualTo("reportedAt", lastDate);

          const parseCounts = await query.limit(MAX_QUERY_COUNT).find();
          if (parseCounts && parseCounts.length) {
            count = 0;
            for (var j = 0; j < parseCounts.length; j++) {
              count += parseCounts[j].get("count");
            }
            parseCountList.push(...parseCounts);
          }

          lastDate = reportedAt;
        } else {
          let query = parseClass.relation("sessionsV2").query();
          query.equalTo("scheduledAt", date);
          const classSession = await query.first();

          const attendance = await loadStudentAttendanceV2(
            userId,
            classSession
          );
          if (
            attendance.attendance != undefined ||
            attendance.onLeave != undefined
          ) {
            count = attendance.attendance ? 1 : 0;
          }
        }
        result[key] = commonFunctions.formatCount(count);
        if (count != undefined) {
          monthlyTotal = (monthlyTotal ? monthlyTotal : 0) + count;
        }
      } else {
        if (key === "TOTAL") {
          result[key] = commonFunctions.formatCount(grandTotal);
        } else if (key.startsWith("20") && key.endsWith("TOTAL")) {
          result[key] = commonFunctions.formatCount(yearlyTotal);
          yearlyTotal = 0;
        } else {
          const delta = monthlyTotal ? monthlyTotal : 0;
          yearlyTotal += delta;
          grandTotal += delta;
          result[key] = commonFunctions.formatCount(monthlyTotal);
          monthlyTotal = undefined;
        }
      }
    }
  }

  return result;
};

const loadDetailedDataForUser = async function(
  mapDates,
  parsePractice,
  parseCountList,
  summaryRecord
) {
  var query, i, j, k, m, key;
  const parsePracticeSessionsList = [];
  const practicedSubmoduleIds = [];

  for (i = 0; i < parseCountList.length; i++) {
    query = parseCountList[i].relation("practiceSessions").query();
    query.ascending("index");
    const practiceSessions = await query.limit(MAX_QUERY_COUNT).find();
    for (j = 0; j < practiceSessions.length; j++) {
      const submoduleId = practiceSessions[j].get("submoduleId");
      if (!practicedSubmoduleIds.includes(submoduleId)) {
        practicedSubmoduleIds.push(submoduleId);
      }
    }
    parsePracticeSessionsList.push(practiceSessions);
  }

  const moduleId = parsePractice.get("moduleId");
  const allSubmodules = await loadPracticeSubmodules(moduleId);
  const practicedSubmodules = allSubmodules.filter(e => {
    return practicedSubmoduleIds.includes(e.id);
  });

  logger.info(
    `loadDetailedDataForUser - practicedSubmodules: ${JSON.stringify(
      practicedSubmodules
    )}`
  );

  var submoduleRecords = [];

  for (j = 0; j < practicedSubmodules.length; j++) {
    var monthlyTotalCount = undefined;
    var monthlyTotalMinutes = undefined;
    var yearlyTotalCount = 0;
    var yearlyTotalMinutes = 0;
    var grandTotalCount = 0;
    var grandTotalMinutes = 0;
    const perSubmoduleRecords = [{}, {}];
    k = 0;
    var cursorInCountList = 0;
    for (key in summaryRecord) {
      if (k < 2) {
        for (m = 0; m < perSubmoduleRecords.length; m++) {
          perSubmoduleRecords[m][key] = summaryRecord[key];
        }
      } else {
        if (k == 2) {
          for (m = 0; m < perSubmoduleRecords.length; m++) {
            perSubmoduleRecords[m]["观修方法"] = practicedSubmodules[j].name;
          }
          perSubmoduleRecords[0]["统计项目"] = "观修座数";
          perSubmoduleRecords[1]["统计项目"] = "观修时数";
          // perSubmoduleRecords[2]["统计项目"] = "观修时长(分钟)";
        }

        const date = mapDates[key];
        if (date) {
          var count = undefined;
          var minutes = undefined;
          for (m = cursorInCountList; m < parseCountList.length; m++) {
            const parseCount = parseCountList[m];
            const reportedAt = parseCount.get("reportedAt");
            if (reportedAt <= date) {
              const parsePracticeSessions = parsePracticeSessionsList[m];
              for (i = 0; i < parsePracticeSessions.length; i++) {
                const parsePracticeSession = parsePracticeSessions[i];
                if (
                  parsePracticeSession.get("submoduleId") ==
                  practicedSubmodules[j].id
                ) {
                  count = (count ? count : 0) + 1;
                  minutes =
                    (minutes ? minutes : 0) +
                    parsePracticeSession.get("duration");
                }
              }
            } else {
              break;
            }
          }
          cursorInCountList = m;

          if (count != undefined) {
            monthlyTotalCount =
              (monthlyTotalCount ? monthlyTotalCount : 0) + count;
            monthlyTotalMinutes =
              (monthlyTotalMinutes ? monthlyTotalMinutes : 0) + minutes;
          }

          perSubmoduleRecords[0][key] = commonFunctions.formatCount(count);
          perSubmoduleRecords[1][key] = commonFunctions.formatMinutes(minutes);
          // perSubmoduleRecords[2][key] = commonFunctions.formatCount(minutes);
        } else {
          if (key === "TOTAL") {
            perSubmoduleRecords[0][key] = commonFunctions.formatCount(
              grandTotalCount
            );
            perSubmoduleRecords[1][key] = commonFunctions.formatMinutes(
              grandTotalMinutes
            );
            // perSubmoduleRecords[2][key] = commonFunctions.formatCount(
            //   grandTotalMinutes
            // );
          } else if (key.startsWith("20") && key.endsWith("TOTAL")) {
            perSubmoduleRecords[0][key] = commonFunctions.formatCount(
              yearlyTotalCount
            );
            perSubmoduleRecords[1][key] = commonFunctions.formatMinutes(
              yearlyTotalMinutes
            );
            // perSubmoduleRecords[2][key] = commonFunctions.formatCount(
            //   yearlyTotalMinutes
            // );
          } else {
            var delta = monthlyTotalCount ? monthlyTotalCount : 0;
            yearlyTotalCount += delta;
            grandTotalMinutes += delta;
            perSubmoduleRecords[0][key] = commonFunctions.formatCount(
              monthlyTotalCount
            );
            monthlyTotalCount = undefined;

            delta = monthlyTotalMinutes ? monthlyTotalMinutes : 0;
            yearlyTotalMinutes += delta;
            grandTotalMinutes += delta;
            perSubmoduleRecords[1][key] = commonFunctions.formatMinutes(
              monthlyTotalMinutes
            );
            // perSubmoduleRecords[2][key] = commonFunctions.formatCount(
            //   monthlyTotalMinutes
            // );
            monthlyTotalMinutes = undefined;
          }
        }
      }
      k++;
    }
    submoduleRecords = submoduleRecords.concat(perSubmoduleRecords);
  }

  return submoduleRecords;
};

Parse.Cloud.define(
  "class:generateReport",
  async ({
    user,
    params: { classId, classTeams, practiceId, loadingDetails, reportHash }
  }) => {
    requireAuth(user);

    logger.info(
      `generateReport - reportHash: ${reportHash} loadingDetails: ${loadingDetails}`
    );
    const requestedAt = new Date();
    var parseReport;
    if (reportHash) {
      var reportQuery = new Parse.Query("Report");
      reportQuery.equalTo("hash", reportHash);
      parseReport = await reportQuery.first();
      if (parseReport) {
        if (
          requestedAt.getTime() <
          parseReport.updatedAt.getTime() + (1 * 60 * 60 * 1000) / 2
        ) {
          return parseReport.get("records");
        }
      }
    }

    var classQuery = new Parse.Query("Class");
    if (classId) {
      classQuery.equalTo("objectId", classId);
    }

    var query, parsePractice;
    if (practiceId) {
      query = new Parse.Query("Practice");
      query.equalTo("objectId", practiceId);
      parsePractice = await query.first();
      if (!classId) {
        classQuery.equalTo("practices", parsePractice);
      }
    }

    var parseClass = await classQuery.first();
    if (!classId) {
      classId = parseClass.id;
    }

    const { csvHeader, mapDates } = commonFunctions.prepareReportGeneration(
      parseClass.get("url").includes("rpsxl"),
      practiceId
    );

    var i,
      parseTeam,
      results = [];
    if (!classTeams) {
      //loading report for self
      classTeams = [
        {
          members: [{ id: user.id }]
        }
      ];
      query = new Parse.Query("Team");
      query.equalTo("classId", classId);
      var parseTeams = await query.limit(MAX_QUERY_COUNT).find();
      for (i = 0; i < parseTeams.length; i++) {
        var membersOrder = parseTeams[i].get("membersOrder");
        if (membersOrder) {
          membersOrder = membersOrder.split(",");
          logger.info(
            `generateReport - membersOrder: ${JSON.stringify(membersOrder)}`
          );

          if (membersOrder.includes(user.id)) {
            parseTeam = parseTeams[i];
            break;
          }
        }
      }
      if (!parseTeam) {
        parseTeam = new Parse.Object("Team");
        parseTeam.set("index", "未分组");
      }
    }

    logger.info(`generateReport - classTeams: ${JSON.stringify(classTeams)}`);
    logger.info(`generateReport - parseTeam: ${JSON.stringify(parseTeam)}`);

    for (i = 0; i < classTeams.length; i++) {
      const team = classTeams[i];
      if (i > 0 || !parseTeam) {
        //parseTeam is loaded above if loading report for self
        query = new Parse.Query("Team");
        query.equalTo("objectId", team.id);
        parseTeam = await query.first();
      }

      for (var j = 0; j < team.members.length; j++) {
        query = new Parse.Query(Parse.User);
        query.equalTo("objectId", team.members[j].id);

        var parseUser = await query.first();
        const parseCountList = [];
        if (parseUser) {
          var result = await loadDataForUser(
            parseClass,
            parsePractice,
            parseUser,
            parseTeam,
            csvHeader,
            mapDates,
            parseCountList
          );
          if (loadingDetails) {
            const details = await loadDetailedDataForUser(
              mapDates,
              parsePractice,
              parseCountList,
              result
            );
            results = results.concat(details);
          } else {
            results.push(result);
          }
        }
      }
    }

    if (reportHash) {
      if (!parseReport) {
        query = new Parse.Query("Report");
        query.equalTo("hash", reportHash);
        parseReport = await query.first();

        if (!parseReport) {
          parseReport = new Parse.Object("Report");
          parseReport.set("hash", reportHash);
        }
      }
      parseReport.set("requestedAt", requestedAt);
      parseReport.set("records", results);
      parseReport = await parseReport.save(null, MASTER_KEY);
      logger.info(`generateReport - saved parseReport: ${parseReport.id}`);
    }

    return results;
  }
);

Parse.Cloud.define(
  "admin:markUserPracticeCompleted",
  async ({ user, params: { userId, practiceId } }) => {
    const result = {};

    var query = new Parse.Query("Practice");
    query.equalTo("objectId", practiceId);
    const practice = await query.first();
    if (practice) {
      const relation = practice.relation("counts");
      query = relation.query();
      query.equalTo("reportedAt", undefined);
      query.equalTo("userId", userId);
      var parseCount = await query.first();

      if (parseCount) {
        parseCount.set("completed", true);
        parseCount = await parseCount.save(null, MASTER_KEY);
        result.completed = parseCount.get("completed");
        result.count = parseCount.get("count");
      }
    }

    return result;
  }
);
