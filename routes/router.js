const express = require('express');
const router = express();

userRoute = require('../routes/userRouter');
transportRoute = require('../routes/transportRouter');

/**
 * This is the User route
 */
router.use('/user', userRoute);
router.use('/transport', transportRoute);

module.exports = router;