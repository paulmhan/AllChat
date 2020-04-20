const router = require('express').Router();
const path = require('path')
const apiRoutes = require('./apiRoutes');





// This will prepend /api to anyroute declared within apiRoutes
router.use('/api', apiRoutes);



module.exports = router;