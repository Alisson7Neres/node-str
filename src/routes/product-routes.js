'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controlles/product-controller')

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.deletar);

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;