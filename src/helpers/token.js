const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = generateToken;
