const express = require('express');
const router = express.Router();
const routerProducts = require('./products')

router.get("/", (req, res) => {
  res.send('home')
})

router.use('/products', routerProducts);

module.exports = router;