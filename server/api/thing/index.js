'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/:cidade', controller.index);
router.get('/:cidade/:id', controller.show);
router.post('/:cidade', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
