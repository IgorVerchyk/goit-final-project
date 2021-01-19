const { UsersRepository } = require('../repository');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_SECRET;
const config = require('../config/config.json');

class AuthService {
  constructor() {
    this.repositories = {
      users: new UsersRepository(),
    };
  }

  async login({ email, password }) {
    const user = await this.repositories.users.findByField({ email: email });

    const isPasswordValid = await this.repositories.users.validatePassword(
      password,
      user.password
    );

    if (!user || !isPasswordValid) {
      return null;
    }

    const { id, projects } = user;
    const payload = { id };
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: config.tokenLife,
    });
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, {
      expiresIn: config.refreshTokenLife,
    });
    await this.repositories.users.updateToken(id, token);

    const createdUser = await this.repositories.users.findById(id);
    createdUser.refreshToken = refreshToken;
    console.log(createdUser);
    return createdUser;
  }

  async token({ email, refreshToken }) {
    const user = await this.repositories.users.findByEmail(email);
    user.refreshToken = refreshToken;
    return user;
  }

  async logout(id) {
    return await this.repositories.users.updateToken(id, null);
  }
}

module.exports = AuthService;
