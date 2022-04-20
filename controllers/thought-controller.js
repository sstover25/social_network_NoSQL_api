const { Thought, User } = require("../models");

const thoughtController = {
  // GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // GET a single thought  by its _id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // POST/Create a new thought
  // PUT/Update a thought by its _id
  // DELETE a thought by its _id
  // POST/Create a reaction stored in a single thought's reactions array
  // DELETE/Remove a reaction by its reactionId
};
