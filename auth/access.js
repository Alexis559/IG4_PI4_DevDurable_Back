const jwt = require('jsonwebtoken');
const uuid = require('./uuid');

module.exports = function (req, res, callback) {
    try {
        req.userData = jwt.verify(req.headers['x-access-token'], uuid.uuid);
        callback();
    }catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Vous devez être connecté !'
        });
    }
};