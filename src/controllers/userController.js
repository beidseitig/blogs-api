const userService = require('../services/userService');

const addUser = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    try {
        const result = await userService(displayName, email, password, image);
        res.status(201).json({ token: result });
    } catch (err) {
        next(err);
    }
};

module.exports = addUser;