const joi = require('joi');
const jwt = require('../helpers/token');
const { User } = require('../database/models');

const schema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string().required(),
});

const addUser = async (displayName, email, password, image) => {
    const { error } = schema.validate({ displayName, email, password, image });

    if (error) {
        const err = new Error(error.message);
        err.code = 'BAD_REQUEST';
        throw err;
    }

    const duplicatedUser = await User.findOne({ where: { email } });

    if (duplicatedUser) {
        const err = new Error('User already registered');
        err.code = 'CONFLICT';
        throw err;
    }

    await User.create({ displayName, email, password, image });

    const token = jwt.generateToken(email);

    return token;
};

const getAll = async () => {
    const result = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return result;
};

const getById = async (id) => {
  const result = await User.findOne(
    { where: { id }, attributes: { exclude: ['password'] } },
  );

  if (!result) {
    const err = new Error('User does not exist');
    err.code = 'NOT_FOUND';
    throw err;
  }

  return result;
};

module.exports = { addUser, getAll, getById };