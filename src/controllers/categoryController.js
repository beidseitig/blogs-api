const categoryService = require('../services/categoryService');

const addCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await categoryService.addCategory(name);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { addCategory };