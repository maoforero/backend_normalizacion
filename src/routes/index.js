const express = require('express');
const router = express.Router();
const routerProducts = require('./products')

router.get("/api", (req, res) => {
  res.send("api");
})

router.use('/products', routerProducts);

module.exports = router;