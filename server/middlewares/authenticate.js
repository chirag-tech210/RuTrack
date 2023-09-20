const jwt = require("jsonwebtoken");

const secret = "Secret";
const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, secret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        } else {
          req.user = user;
          next();
        }
      });
    } else {
      res.sendStatus(401);
    }
  };
  
  const generateJwt = (user) => {
    const payload = { username: user.username };
    return jwt.sign(payload, secret, { expiresIn: "5hr" });
  };

  module.exports = {authenticateJwt,generateJwt};
