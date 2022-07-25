const userService = require('../services/userService');

const addUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const result = await userService.addUser(displayName, email, password, image);
    res.status(201).json({ token: result });
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res) => {
  const result = await userService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { addUser, getAll, getById };