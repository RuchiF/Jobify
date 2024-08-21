const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { UnauthenticatedError } = require("../errors/index");

const auth = async (req, res, next) => {
  //* check header: To check whether the token is authorized aur not
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //* attach the user to job routes
    // console.log(payload);
    req.user = {
      userId: payload.userId,
      name: payload.name,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid error");
  }
};

module.exports = auth;
