//here we will set up authentication functionality

const { BadRequestError, UnauthenticatedError } = require("../errors/index");

const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

//* Authentication functionality will have 2 features register n login

const register = async (req, res) => {
  //*For now we let the mongoose look for invalid credentials n raise errors
  //* instead of dealing with them in controller

  //* now we will create a new user as per the schema
  const user = await User.create({ ...req.body });

  //*Now we will create json web token
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    name: user.name,
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //*handling errors in the controller

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  //* finding a user with that email..

  const user = await User.findOne({ email });
  //* throw an error if we cannot find user with that email

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  //*check for correct password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Incorrect Password");
  }

  //* create a token if user exists
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: { name: user.name },
    token,
  });
};

module.exports = {
  register,
  login,
};
