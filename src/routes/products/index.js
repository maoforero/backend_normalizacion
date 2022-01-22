const express = require('express');
const router = express.Router();
const controller = require('../../controllers/products')

router.get('/jaja', controller.index)

router.post('/', controller.post)

router.put('/update/:id', controller.put)

module.exports = router