function getProductsNotInPriceRange(products) {
  return products
    .filter(product => product.price < 100 || product.price > 500)
    .map(product => product.name);
}

module.exports = getProductsNotInPriceRange;
