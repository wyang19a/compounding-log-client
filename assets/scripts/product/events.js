const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetProducts = event => {
  event.preventDefault()
  api.getAllProducts()
    .then(ui.onGetProductsSuccess)
}

const onGetOneProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.getOneProduct(formData)
    .then(ui.onGetProductSuccess)
    .catch(ui.onGetProductFailure)
}

const onCreateProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createProduct(formData)
    .then(ui.onCreateProductSuccess)
    .catch(ui.onCreateProductFailure)
}

const onUpdateProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.updateProduct(formData)
    .then(ui.onUpdateProductSuccess)
    .catch(ui.onUpdateProductFailre)
}

const onDeleteProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.deleteProduct(formData)
    .then(ui.onDeleteProductSuccess)
    .catch(ui.onDeleteProductFailure)
}

const addHandlers = event => {
  $('#get-products').on('submit', onGetProducts)
  $('#get-one-product').on('submit', onGetOneProduct)
  $('#create-product').on('submit', onCreateProduct)
  $('#update-product').on('submit', onUpdateProduct)
  $('#delete-product').on('submit', onDeleteProduct)
}
module.exports = {
  addHandlers
}
