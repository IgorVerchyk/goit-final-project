const AuthService = require("../services/auth");
const UsersService = require("../services/user");
const { HttpCode } = require("../helpers/constants");

const userServise = new UsersService();
const authService = new AuthService();

const reg = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userServise.findByEmail(email);
  if (user) {
    return next({
      status: HttpCode.CONFLICT,
      data: "Conflict",
      message: "This email is already use",
    });
  }
  try {
    const newUser = await userServise.create({
      email,
      password,
    });
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login({ email, password });
    if (token) {
      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        data: {
          token,
        },
      });
    }
    next({
      status: HttpCode.UNAUTHORIZED,
      message: "Invalid creadentials",
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  const id = req.user.id;
  await userServise.logout(id);
  return res.status(HttpCode.NO_CONTENT).json({
    status: "success",
    code: HttpCode.NO_CONTENT,
  });
};

const current = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await userServise.getCurrentUser(userId);
    if (user) {
      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        data: {
          user,
        },
      });
    } else {
      return next({
        status: HttpCode.UNAUTHORIZED,
        message: "Invalid credentials",
      });
    }
  } catch (e) {
    next(e);
  }
};

const verify = async (req, res, next) => {
  try {
    const result = await userServise.verify(req.params);
    if (result) {
      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        data: {
          message: "Verification successful",
        },
      });
    } else {
      return next({
        status: HttpCode.BAD_REQUEST,

        message: "Verification token is not valid",
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  reg,
  login,
  logout,
  current,
  verify,
};
