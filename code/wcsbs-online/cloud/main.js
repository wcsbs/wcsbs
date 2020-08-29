/* eslint-disable no-undef */
const MASTER_KEY = { useMasterKey: true };

const requireAuth = user => {
  if (!user) throw new Error("User must be authenticated!");
  Parse.Cloud.useMasterKey();
};

const requireRole = (userWithRoles, role) => {
  if (!userWithRoles) throw new Error("User must be authenticated!");
  if (!userWithRoles.roles.includes(role)) {
    throw new Error(`User must be ${role}!`);
  }
};

Parse.Cloud.define(
  "user:signup",
  async ({ params: { name, email, password, phone } }) => {
    return new Parse.User({
      name,
      email,
      password,
      username: email,
      phone
    }).save(MASTER_KEY);
  }
);

Parse.Cloud.define("user:getRoles", async ({ user }) => {
  var userRoleQuery = new Parse.Query(Parse.Role);
  userRoleQuery.equalTo("users", user);
  const roles = await userRoleQuery.find(MASTER_KEY);
  const rolesToReturn =
    roles.length > 0 ? roles.map(r => r.get("name")) : ["StudentUser"];

  return {
    id: user.id,
    name: user.get("name"),
    username: user.get("username"),
    phone: user.get("phone"),
    email: user.get("email"),
    state: user.get("state"),
    roles: rolesToReturn
  };
});

Parse.Cloud.define(
  "user:adminFetchUsers",
  async ({ user, params: { user: userWithRoles } }) => {
    requireAuth(user);
    requireRole(userWithRoles, "B4aAdminUser");

    var userQuery = new Parse.Query(Parse.User);
    userQuery.ascending("name");
    const results = await userQuery.find(MASTER_KEY);
    const usersCount = results.length;
    const users = results.map(user => {
      return {
        id: user.id,
        name: user.get("name"),
        username: user.get("username"),
        phone: user.get("phone"),
        email: user.get("email")
      };
    });
    return { users, usersCount };
  }
);

Parse.Cloud.define(
  "user:adminFetchUser",
  async ({ user, params: { user: userWithRoles, userSlug } }) => {
    requireAuth(user);
    requireRole(userWithRoles, "B4aAdminUser");

    var userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo("objectId", userSlug);
    userWithRoles = await userQuery.first(MASTER_KEY);

    var userRoleQuery = new Parse.Query(Parse.Role);
    userRoleQuery.equalTo("users", userWithRoles);
    const roles = await userRoleQuery.find(MASTER_KEY);

    userWithRoles = {
      id: userWithRoles.id,
      name: userWithRoles.get("name"),
      username: userWithRoles.get("username"),
      phone: userWithRoles.get("phone"),
      email: userWithRoles.get("email"),
      state: userWithRoles.get("state"),
      roles: roles.map(r => r.get("name"))
    };
    return userWithRoles;
  }
);

Parse.Cloud.define(
  "user:adminUpdateUser",
  async ({ user, params: { user: userWithRoles, userToUpdate } }) => {
    requireAuth(user);
    requireRole(userWithRoles, "B4aAdminUser");

    const array = [
      { enabled: userToUpdate.isSystemAdmin, roleName: "B4aAdminUser" },
      { enabled: userToUpdate.isClassAdmin, roleName: "ClassAdminUser" },
      {
        enabled: userToUpdate.isTeachingAssistant,
        roleName: "TeachingAssistantUser"
      },
      { enabled: userToUpdate.isStudent, roleName: "StudentUser" }
    ];

    var parseUser;
    if (userToUpdate.id) {
      var userQuery = new Parse.Query(Parse.User);
      userQuery.equalTo("objectId", userToUpdate.id);
      parseUser = await userQuery.first(MASTER_KEY);
    } else {
      parseUser = new Parse.User(MASTER_KEY);
    }

    parseUser.set("username", userToUpdate.username);
    parseUser.set("name", userToUpdate.name);
    parseUser.set("phone", userToUpdate.phone);
    parseUser.set("email", userToUpdate.email);

    if (userToUpdate.state === "blocked") {
      parseUser.set("emailVerified", false); // blocking user form login
    } else {
      if (userToUpdate.password) {
        parseUser.set("password", userToUpdate.password);
        userToUpdate.state = "needToChangePassword"; // user needs to update password in next login
      }
      if (!parseUser.get("emailVerified")) {
        parseUser.set("emailVerified", true); // re-enable user form login
      }
    }

    if (userToUpdate.state) {
      parseUser.set("state", userToUpdate.state);
    } else {
      parseUser.unset("state");
    }

    userToUpdate = await parseUser.save(null, MASTER_KEY);

    var userRoleQuery = new Parse.Query(Parse.Role);
    userRoleQuery.equalTo("users", userToUpdate);
    var roles = await userRoleQuery.find(MASTER_KEY);
    var roleNames = [];

    for (n = 0; n < array.length; n++) {
      i = array[n];
      if (i.enabled) {
        roleNames.push(i.roleName);
      }

      const existing = roles.some(r => r.get("name") === i.roleName);
      if (i.enabled != existing) {
        var roleQuery = new Parse.Query(Parse.Role);
        roleQuery.equalTo("name", i.roleName);
        var role = await roleQuery.first(MASTER_KEY);
        const relation = role.relation("users");

        if (i.enabled) {
          relation.add(userToUpdate);
        } else {
          relation.remove(userToUpdate);
        }
        await role.save(null, MASTER_KEY);
      }
    }

    return {
      id: userToUpdate.id,
      name: userToUpdate.get("name"),
      username: userToUpdate.get("username"),
      phone: userToUpdate.get("phone"),
      email: userToUpdate.get("email"),
      state: userToUpdate.get("state"),
      roles: roleNames
    };
  }
);
const loadStudentDashboard = async function(parseUser) {
  const dashboard = {
    classes: [],
    practices: []
  };
  var query = new Parse.Query("Class");
  query.equalTo("students", parseUser);
  const parseClasses = await query.find();

  for (var i = 0; i < parseClasses.length; i++) {
    const parseClass = parseClasses[i];
    const classInfo = { name: parseClass.get("name") };

    query = parseClass.relation("classAdminUsers").query();
    const classAdminUsers = await query.find();
    classInfo.teachers = classAdminUsers.map(u => u.get("name"));

    query = parseClass.relation("students").query();
    classInfo.studentCount = await query.count();

    query = parseClass.relation("sessions").query();
    var d = new Date();
    query.greaterThan("scheduledAt", d);
    query.ascending("scheduledAt");
    classInfo.nextSession = await query.first();

    query.lessThanOrEqualTo("scheduledAt", d);
    query.descending("scheduledAt");
    classInfo.lastSession = await query.first();

    dashboard.classes.push(classInfo);
  }

  return dashboard;
};

Parse.Cloud.define(
  "home:loadDashboards",
  async ({ user, params: { user: userWithRoles } }) => {
    requireAuth(user);

    const result = {};
    if (userWithRoles.roles.includes("StudentUser")) {
      result.studentDashboard = await loadStudentDashboard(user);
    }

    return result;
  }
);
