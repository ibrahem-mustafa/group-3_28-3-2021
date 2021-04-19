
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../../config/keys') 

const AuthRequired = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) return InvalidToken(res)
        const token = authorization.split(" ")[1];
        const user = jwt.verify(token, JWT_KEY)
        
        req.user = user
        next()
    } catch(err) {
        console.log(err)
        InvalidToken(err);
    }
}

function InvalidToken(res) {
    res.status(401).json({ msg: "Invalid Token" });
}

module.exports = {AuthRequired}