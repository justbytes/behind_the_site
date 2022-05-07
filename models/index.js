// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'product_id'
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
 
  as: 'p_tag'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },

  as: 'tag_product'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
