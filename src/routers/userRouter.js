const express = require('express');
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', userController.addUser);

router.use(tokenValidation);

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

module.exports = router;