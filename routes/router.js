const express = require('express');
const router = express();

userRoute = require('../routes/userRouter');
transportRoute = require('../routes/transportRouter');
journeyRoute = require('../routes/journeyRouter');

/**
 * This is the User route
 */
router.use('/user', userRoute);
router.use('/transport', transportRoute);
router.use('/journey', journeyRoute);

module.exports = router;