const { Router } = require("express");
const {
  getAllUsers,
  loginUsers,
  updateUserInfo,
  registerNewUser,
  searchUsers,
} = require("../controllers/usersController.js");

const router = Router();

router.get("/api/users", getAllUsers);
router.post("/api/users/:id", loginUsers);
router.put("/api/users/:id", updateUserInfo);
router.post("/api/users", registerNewUser);
router.get("/api/search", searchUsers);

module.exports = {
  usersRouter: router,
};


  