const express = require('express');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.use(tokenValidation);

router.get('/', postController.getAll);

module.exports = router;