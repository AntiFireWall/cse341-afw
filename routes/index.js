const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  // #swagger.tags=['Ola!']
  res.send('Ola!');
});

router.use('/users', require('./users'));

module.exports = router;
