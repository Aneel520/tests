// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = '1000'; // Replace with your secret key

function authenticateJWT(req, res, next) {
    const token = req.headers.authorization;
    const temp = token.split(' ')
    console.log(temp[1])
    if (!temp[1]) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(temp[1], secretKey, (err) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }// Attach user information to the request object
        next();
    });
}

module.exports = {
    authenticateJWT
};
