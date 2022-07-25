const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    categoryId: {
      primaryKey: true, 
      foreignKey: true,
      references: {
        model: 'Category',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    postId: {
      primaryKey: true, 
      foreignKey: true,
      references: {
        model: 'BlogPost',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      primaryKey: 'postId', 
      foreignKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      primaryKey: 'categoryId',
      foreignKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;