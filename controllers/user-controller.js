const { User } = require("../models");

const userController = {
  // GET all users
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // GET a single user by its _id and populated thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
      })
      .populate({
        path: "friends",
      })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // POST a new user
  // PUT/Update user by its _id
  // DELETE a user by its _id
  // POST/Add a friend to a user's friend list
  // DELETE/Remove a friend from a user's friend list
};
