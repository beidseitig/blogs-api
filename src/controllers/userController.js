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

module.exports = { addUser, getAll };