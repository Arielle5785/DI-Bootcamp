const { hashpwd,users } = require("../config/data.js");
const { getAllUsersFromUsers,getAllUsersFromHashpwd} = require("../models/usersModel.js");
const { randomBytes, pbkdf2Sync, hash } = require("crypto");

const generateSaltHash = (password) => {
    const salt = randomBytes(128).toString('base64');
    const hash = pbkdf2Sync('abs123', salt, 1000, 64, 'sha512').toString('base64');
    return {salt, hash}
}
// console.log(generateSaltHash('arielle'));

const getAllUsers = (req, res) => {
  getAllUsersFromUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "user must register, not found" });
    });
};

const registerNewUser = (req, res) => {
    console.log(req.body);
    const { email,username,first_name,last_name } = req.body;
    const{salt,hash} = generateSaltHash('abs123')
  const newUser = { id: users.length + 1, email,username,first_name,last_name, salt,hash };
  users.push(newUser);
  res.json(users);
};

const updateUserInfo = (req, res) => {
  const { id } = req.params;
  const { username, email,first_name,last_name } = req.body;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "users not found" });
  }
  users[index] = { ...users[index], email,username, first_name,last_name, salt,hash };
  res.status(200).json(users);
};

const loginUsers = (req, res) => {
  const { username, password } = req.body;
  getAllUsersFromHashpwd(username, password )
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "user must register, not found" });
    });
  const myUser = hashpwd.find((item) => item.username == username);
  if (!myUser) return res.status(404).json({ message: 'User not found.' })
  const hashToCompare = crypto.pbkdf2Sync(password, myUser.salt, 1000, 64, 'sha512').toString('base64');
  if (hashToCompare !== myUser.hash) {
    return res.status(401).json({ message: 'Wrong password.' });
  }
  res.json({ message: 'Login successful.', user: myUser });
};
  

const searchUsers = (req, res) => {
  console.log(req.query);
  const { username } = req.query;
  const filtered = users.filter((item) => {
    return item.username.toLowerCase().includes(username.toLowerCase());
  });
  if (filtered.length === 0)
    return res.status(404).json({ message: "no users match your search" });
  res.json(filtered);
};



module.exports = {
  generateSaltHash,
  getAllUsers,
  updateUserInfo,
  registerNewUser,
  loginUsers,
  searchUsers,
};
