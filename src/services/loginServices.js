const joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

require('dotenv').config();

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const login = async (email, password) => {
    const { error } = schema.validate({ email, password });

    if (error) {
        const err = new Error('Some required fields are missing');
        err.code = 'BadRequest';
        throw err;
    }

    const userLogin = await User.findOne({ where: { email } });

    if (!userLogin) {
        const err = new Error('Invalid fields');
        err.code = 'BadRequest';
        throw err;
    }

    const token = generateToken(email);

    return token;
};

module.exports = login;
