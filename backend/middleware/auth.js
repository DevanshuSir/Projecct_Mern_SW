const jwt = require("jsonwebtoken");

const verifyTokens = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader;

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Tokens" });
  }
};

module.exports = verifyTokens;
