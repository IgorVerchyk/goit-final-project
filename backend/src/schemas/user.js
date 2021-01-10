const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const SALT_FACTOR = 6;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate(value) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(value));
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },

    refreshToken: {
      type: String,
      default: null,
    },

    verify: {
      type: Boolean,
      default: false,
    },

    verifyToken: { type: String, required: [true, "Verify token is required"] },

    projects: [{ type: Types.ObjectId, ref: "Project" }],
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(
    this.password,
    bcrypt.genSaltSync(SALT_FACTOR),
  );
  next();
});

userSchema.methods.validPassword = async function (password, userPassword) {
  return bcrypt.compare(password, userPassword);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
