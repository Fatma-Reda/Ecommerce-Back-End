const createError = require('http-errors');
const User = require('./../models/userschema');

module.exports = async (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) throw new Error('token required');
        req.user = await User.getUserByToken(token);
        next();
    } catch (err) {
        next(createError(401, 'not-authenticated'));
    }
};