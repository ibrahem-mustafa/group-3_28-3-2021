const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../../config/auth.config')





const ValidateToken = (req, res, next) => {
  try {

    const authorization = req.headers.authorization;
    if (!authorization) return NotAllowed(res);
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, JWT_KEY)
    req.user = user;
    next()
  } catch (err) {
    console.log(err);
    NotAllowed(res);
  }
};


function NotAllowed(res) {
     res.status(401).json({ message: "Not Allowed" });
}

module.exports = {
    ValidateToken
}