const { Category } = require('../database/models');

const addCategory = async (name) => {
  if (!name) {
    const err = new Error('"name" is required');
    err.code = 'BAD_REQUEST';
    throw err;
  }

  const result = await Category.create({ name });
  console.log(`Service ${result}`);

  return {
    id: result.null,
    name,
  };
};

module.exports = { addCategory };
