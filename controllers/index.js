const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home.js");
const loginRoutes = require("./api/login.js");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);



module.exports = router;