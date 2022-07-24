const loginService = require('../services/loginServices');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const result = await loginService(email, password);
        res.status(200).json({ token: result });
    } catch (err) {
        next(err);
    }
};

module.exports = login;