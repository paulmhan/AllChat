const router = require('express').Router();


const userRoutes = require('./userRoutes');

// /api  prepended to every route declared in here
// declares a route for /api/todos
router.use("/user", userRoutes);





module.exports = router;
