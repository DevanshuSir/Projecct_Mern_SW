const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    // console.log(bearerHeader);

    if (bearerHeader !== "Bearer undefined") {
      const token = bearerHeader.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No token found in header" });
      }

      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.token = user;
      return next();
    } else {
      // console.log("No Token");
      return res.status(401).json({ message: "No token provided" });
    }
  } catch (error) {
    // console.log("JWT Verify Error:", error.message);
    return res.status(403).json({ message: "Invalid token or expired token" });
  }
};

module.exports = auth;
