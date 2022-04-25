const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// GET all thoughts and POST/Create new thoughts at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET one thought, PUT/Update one thought, and DELETE one thought at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST/Add a new reaction at /api/thoughts/:id/reactions
router.route("/:id/reactions").post(addReaction);

// DELETE/Remove a reaction at /api/thoughts/:id/reactions/:reactionId
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;
