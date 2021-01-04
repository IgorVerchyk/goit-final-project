const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { UsersService } = require("../services");
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const params = {
  secretOrKey: [SECRET_KEY, REFRESH_TOKEN],
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(params, async (payload, done) => {
    try {
      const service = new UsersService();
      const user = await service.findById(payload.id);

      if (!user) {
        return done(new Error("User not found"));
      }
      if (!user.token) {
        return done(null, false);
      }
      return done(null, user);
    } catch (e) {
      done(e);
    }
  }),
);
