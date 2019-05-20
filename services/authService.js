module.exports = function(){
    const uuid = require('./uuid');
    const bcrypt = require('bcrypt-nodejs');
    const jwt = require('jsonwebtoken');

    const module = {};

    /**
     * Return the hashed version of the password
     * @param plainPassword
     */
    module.cryptPassword = function (plainPassword) {
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainPassword, salt);
    };

    /**
     * Return true if hash(plainPassword) == password
     * @param password
     * @param plainPassword
     */
    module.compareSync = function (password, plainPassword) {
        return bcrypt.compareSync(password, plainPassword)
    };

    /**
     * Return the jsonWebToken as string
     * @param payload
     * @returns {*}
     */
    module.createToken = function (payload) {
        return jwt.sign(payload, uuid.uuid);
    };

    /**
     *
     * @param req
     * @returns {string|*}
     */
    module.getUserLogin = function(req) {
        if(req !== undefined){
            return jwt.verify(req.headers['x-access-token'], uuid.uuid);
        }else{
            return 'not connected';
        }
    };

    return module;
};