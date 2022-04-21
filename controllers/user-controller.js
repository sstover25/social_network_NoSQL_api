const { User, Thought } = require("../models");

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
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // PUT/Update user by its _id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "No user found associated with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // DELETE a user by its _id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((deletedUser) => {
        if (!deletedUser) {
          return res
            .status(404)
            .json({ message: "No user found associated with this id!" });
        }
        return Thought.deleteMany({ username: deletedUser.username });
      })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // POST/Add a friend to a user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user found associated with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // DELETE/Remove a friend from a user's friend list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
