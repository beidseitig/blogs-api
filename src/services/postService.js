const { BlogPost, User, Category } = require('../database/models');

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', attributes: ['id', 'name'],
      },
    ],
  });

  return result;
};

module.exports = { getAll };