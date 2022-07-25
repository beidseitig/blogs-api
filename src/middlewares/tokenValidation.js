const JWT = require('../helpers/token');

const tokenValidation = (req, _res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      const e = new Error('Token not found');
      e.code = 'UNAUTHORIZED';
      throw e;
    }

    JWT.verifyToken(authorization);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = tokenValidation;