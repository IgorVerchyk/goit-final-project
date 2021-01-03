const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const SALT_FACTOR = 6;

const projectSchema = new Schema({
  projectId: { type: String, require: true },
  isAdmin: { type: Boolean, default: true },
  title: { type: String, require: true },
  descr: { type: String, require: true },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,

      default: "Guest",

    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate(value) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(value).toLocaleLowerCase());
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
      default: null,
    },

    verify: {
      type: Boolean,
      default: false,
    },

    verifyToken: { type: String, required: [true, "Verify token is required"] },

    projects: [projectSchema],
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(
    this.password,
    bcrypt.genSaltSync(SALT_FACTOR),
  );
  next();
});

userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;
