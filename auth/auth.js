module.exports = function(){
    const bcrypt = require('bcrypt-nodejs');

    const module = {};

    //return the hashed version of the password
    module.cryptPassword = function (plainPassword) {
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainPassword, salt);
    };

    return module;
};