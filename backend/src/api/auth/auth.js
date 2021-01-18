const express = require('express');
const router = express.Router();
const guard = require('../../helpers/guard');
const auth = require('../../middleware/auth.middleware');
const controllerUsers = require('../../controllers/auth');
const { validateAuth } = require('../../validation/validation');

router.get('/current', auth, controllerUsers.current);
router.get('/verify/:token', controllerUsers.verify);
router.post('/registration', validateAuth, controllerUsers.reg);
router.post('/login', controllerUsers.login);
router.post('/token', controllerUsers.token);
router.post('/logout', auth, controllerUsers.logout);

router.use(require('../../helpers/tokenChacker'));

module.exports = router;
