const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// GET all users and POST/Create new users at /api/users
router.route("/").get(getAllUsers).post(createUser);

// GET one user, PUT/Update one user, and DELETE one user at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// POST/Add a new friend and DELETE/Remove a friend at /api/users/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
