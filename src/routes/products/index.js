const express = require('express');
const router = express.Router();
const controller = require('../../controllers/products')

//Get products
router.get('/jaja', controller.index);

//Post Product
router.post('/', controller.post);

//Update one product for id
router.put('/update/:id', controller.put);

//Delete one product for id
router.delete('/delete/:id', controller.delete);

module.exports = router