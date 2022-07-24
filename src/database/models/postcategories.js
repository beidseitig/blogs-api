'use strict';
const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategories", {
    name: DataTypes.STRING,
  });

  return PostCategories;
};

module.exports = PostCategories;