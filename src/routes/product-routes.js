'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controlles/product-controller')

router.post('/', controller.post);
router.post('/:id', controller.put);
router.post('/', controller.deletar);

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;