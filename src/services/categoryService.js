const { Category } = require('../database/models');

const addCategory = async (name) => {
  if (!name) {
    const err = new Error('"name" is required');
    err.code = 'BAD_REQUEST';
    throw err;
  }

  const result = await Category.create({ name });
  
  return {
    id: result.null,
    name,
  };
};

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { addCategory, getAll };
