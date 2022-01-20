const express = require('express')
const { Router } = express;
let router = new Router


router.get("/", (req, res) => {
  res.send("Productos");
})

module.exports = router