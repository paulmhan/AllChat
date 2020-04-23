const router = require('express').Router();


const chatRoutes = require('./chatRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/todos
router.use("/chat", chatRoutes);


module.exports = router;
