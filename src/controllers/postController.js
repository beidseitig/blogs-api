const postService = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const result = await postService.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };