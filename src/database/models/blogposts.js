'use strict';
const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPosts", {
    name: DataTypes.STRING,
  });

  return BlogPosts;
};

module.exports = BlogPosts;