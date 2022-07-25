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

const getAll = async (_req, res) => {
  const result = await categoryService.getAll();
  res.status(200).json(result);
};

module.exports = { addCategory, getAll };