const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    try {
        console.log("Inside jwtMiddleware function");
        const token = req.headers.authorization.split(" ")[1];
        const verifiedData = jwt.verify(token, process.env.SECRET_KEY)
        req.payload = verifiedData
        next()
    }
   catch (err) {
    console.log("JWT ERROR:", err.message);
    res.status(401).json({ msg: "Invalid Token" });
}
}

module.exports = jwtMiddleware