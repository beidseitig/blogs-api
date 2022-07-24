const joi = require('joi');
const jwt = require('../helpers/token');
const { User } = require('../database/models');

const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const login = async (email, password) => {
    const { error } = schema.validate({ email, password });

    if (error) {
        const err = new Error('Some required fields are missing');
        err.code = 'BAD_REQUEST';
        throw err;
    }

    const userLogin = await User.findOne({ where: { email } });

    if (!userLogin) {
        const err = new Error('Invalid fields');
        err.code = 'BAD_REQUEST';
        throw err;
    }

    const token = jwt(email);

    return token;
};

module.exports = login;
