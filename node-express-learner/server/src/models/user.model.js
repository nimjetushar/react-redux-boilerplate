var users = require("../../assets/user.data");

function createUser(user = {}) {
  user.id = users.length + 1;
  users.push(user);
}

function fetchUser(id) {
  for (let i = 0; i < users.length; i++) {
    let data = users[i];
    if (data.id == id) {
      return data;
    }
  }
  return null;
}

function updateUser(user) {
  const userId = user.id;
  for (let i = 0; i < users.length; i++) {
    const obj = users[i];
    if (obj.id == userId) {
      Object.assign(obj, user);
      break;
    }
  }
}

function deleteUser(user) {
  let i = 0;
  len = users.length;
  const id = user.id;
  for (i = 0; i < len; i++) {
    const obj = users[i];
    if (obj.id == id) {
      users.splice(i, 1);
      break;
    }
  }
}

module.exports = {
  createUser: createUser,
  fetchUser: fetchUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  users: users
};
