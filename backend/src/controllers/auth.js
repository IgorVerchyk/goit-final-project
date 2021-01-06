const AuthService = require("../services/auth");
const UsersService = require("../services/user");
const { HttpCode } = require("../helpers/constants");

const userServise = new UsersService();
const authService = new AuthService();
const tokenList = {};

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
    const result = await authService.login({ email, password });

    if (result.token || result.refreshToken) {
      const response = {
        id: result.id,
        token: result.token,
        refreshToken: result.refreshToken,
        projects: result.projects,
        email: result.email,
      };
      tokenList[result.refreshToken] = response;

      return res.status(HttpCode.OK).json(response);
    }
    next({
      status: HttpCode.UNAUTHORIZED,
      message: "Invalid creadentials",
    });
  } catch (e) {
    next(e);
  }
};

const token = async (req, res, next) => {
  const { email, password, refreshToken } = req.body;
  // console.log(req.body);
  try {
    const result = await authService.token({ email, password, refreshToken });

    if (result.refreshToken && result.refreshToken in tokenList) {
      const response = {
        token: result.token,
      };
      tokenList[result.refreshToken].token = result.token;
      return res.status(HttpCode.OK).json(response);
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
  await authService.logout(id);
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
    const token = req.params.token;
    const result = await userServise.verify(token);
    console.log(token);
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
  token,
  logout,
  current,
  verify,
};
