// const router = require('express').Router();
// // const pizzaRoutes = require('./pizza-routes');
// const commentRoutes = require('./comment-routes');
// const pizzaRoutes = require('./pizza-routes');

// router.use('/comments', commentRoutes);
// // router.use('/pizzas', pizzaRoutes);

// // add prefix of `/pizzas` to routes created in `pizzas-routes.js`
// router.use('/pizzas', pizzaRoutes);

// module.exports = router;



const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
