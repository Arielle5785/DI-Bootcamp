const { db } = require("../config/data.js");


const getAllUsersFromUsers = () => {
  return db("users").select("id", "email", "username", "first_name", "last_name").orderBy("username");
};

const getAllUsersFromHashpwd = () => {
  return db("hashpwd").select("id",  "username", "salt", "hash").orderBy("username");
};

const create_user = (email,username,first_name,last_name, salt, hash ) => {
  return db("users").insert({email,username,first_name,last_name, salt, hash}["email","username","first_name","last_name", "salt","hash"])
}
module.exports = {
  getAllUsersFromUsers,
  getAllUsersFromHashpwd,
  create_user
};
