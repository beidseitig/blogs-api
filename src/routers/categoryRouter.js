const express = require('express');
const categoryController = require('../controllers/categoryController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.use(tokenValidation);

router.post('/', categoryController.addCategory);

router.get('/', categoryController.getAll);

module.exports = router;