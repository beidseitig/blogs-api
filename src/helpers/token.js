require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (_err) {
    const e = new Error('Expired or invalid token');
    e.code = 'UNAUTHORIZED';
    throw e;
  }
};

module.exports = { generateToken, verifyToken };
