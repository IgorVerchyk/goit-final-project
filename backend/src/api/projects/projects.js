const express = require("express");
const usersController = require("../../controllers/projects");
const router = express.Router();
const guard = require("../../helpers/guard");
const { createAccountLimiter } = require("../../helpers/reate-limit");
const upload = require("../../helpers/multer");

router.get("/current", guard, usersController.current);
router.get("/verify/:token", usersController.verify);

router.post("/registration", createAccountLimiter, usersController.reg);
router.post("/login", usersController.login);
router.post("/logout", guard, usersController.logout);
router.patch(
  "/avatars",
  guard,
  upload.single("avatar"),
  usersController.avatars
);

module.exports = router;
