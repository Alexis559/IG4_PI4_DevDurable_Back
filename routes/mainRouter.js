
// Router manages all routes

// Modules
const express = require('express');
const router = express();

// Routes
journeyRoutes = require('./journeyRoute');
router.use('/journeyRoute', journeyRoutes);

module.exports = router;