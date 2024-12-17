const { db } = require("../config/data.js");


const getAllUsersFromUsers = () => {
  return db("users").select("id", "email", "username", "first_name", "last_name").orderBy("username");
};

const getAllUsersFromHashpwd = () => {
  return db("hashpwd").select("id",  "username", "salt", "hash").orderBy("username");
};


module.exports = {
  getAllUsersFromUsers,
  getAllUsersFromHashpwd,
};
