

const validateState = (product) => {
  return product.isActive;
}

const filterProduct = (product, searching) => {
  return product.name.toLowerCase().includes(searching.toLowerCase())
}

const filterTag = (tag, searching) => {
  return tag.toLowerCase().includes(searching.toLowerCase());
}


module.exports = {
  validateState,
  filterProduct,
  filterTag
}