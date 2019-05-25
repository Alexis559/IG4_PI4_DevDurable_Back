const express = require('express');
const router = express();

userRoute = require('../routes/userRouter');
transportRoute = require('../routes/transportRouter');
journeyRoute = require('../routes/journeyRouter');

//Routes
router.use('/user', userRoute);
router.use('/transport', transportRoute);
router.use('/journey', journeyRoute);

module.exports = router;