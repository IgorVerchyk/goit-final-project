const express = require("express");
const router = express.Router();
const guard = require("../../helpers/guard");
const controllerUsers = require("../../controllers/auth");

router.get("/current", controllerUsers.current);
router.get("/verify/:token", controllerUsers.verify);
router.post("/registration", controllerUsers.reg);
router.post("/login", controllerUsers.login);
router.post("/token", controllerUsers.token);
router.post("/logout", guard, controllerUsers.logout);

router.use(require("../../helpers/tokenChacker"));

module.exports = router;
