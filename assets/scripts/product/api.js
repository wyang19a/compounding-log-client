const config = require('../config')
const store = require('../store')

const getAllProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getOneProduct = id => {
  // console.log('FormData.product is' + formData.product)
  return $.ajax({
    url: config.apiUrl + '/products/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
// const getOneProductByID = (formData) => {
//   console.log('FormData.product is' + formData.product)
//   return $.ajax({
//     url: config.apiUrl + '/products/' + formData.product.id,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const createProduct = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const updateProduct = (formData, productId) => {
  return $.ajax({
    url: config.apiUrl + '/products/' + productId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteProduct = id => {
  return $.ajax({
    url: config.apiUrl + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
