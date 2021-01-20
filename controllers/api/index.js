const router = require("express").Router();

const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const loginRoutes = require("./login");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/login", loginRoutes);

module.exports = router;