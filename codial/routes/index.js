const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.use("/users", require("./users"));

router.get("/", homeController.home);
router.get("/sign-up", homeController.signup);

module.exports = router;
