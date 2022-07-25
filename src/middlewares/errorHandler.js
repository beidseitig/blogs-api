const httpCodes = require('../helpers/httpCodes');

const erroHandler = (err, _req, res, _next) => {
  const { code } = err;
  if (!code) return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  res.status(httpCodes[code]).json({ message: err.message });
};

module.exports = erroHandler; 