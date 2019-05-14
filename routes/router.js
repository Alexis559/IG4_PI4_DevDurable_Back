const express = require('express');
const router = express();

userRoute = require('../routes/userRouter');

router.use('/user', userRoute);

module.exports = router;