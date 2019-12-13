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

const getOneProduct = (formData) => {
  console.log('FormData.product is' + formData.product)
  return $.ajax({
    url: config.apiUrl + '/products/' + formData.product.name,
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

const updateProduct = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/products/' + formData.product.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteProduct = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/products/' + formData.product.id,
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
  // getOneProductByID
}
