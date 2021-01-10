const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: "Нет авторизации" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Нет авторизации" });
  }
};
