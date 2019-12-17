const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')
const ingredientApi = require('../ingredient/api')

const onGetProducts = event => {
  event.preventDefault()
  api.getAllProducts()
    .then(ui.onGetProductsSuccess)
  store.productId = ''
  store.ingredientId = ''
  store.productRcpId = ''
  store.ingredientRcpId = ''
  $('.select-ingredient-table').html('')
}
// $('.show-btn').tooltip(options)
const onGetOneProduct = event => {
  $('#update-product').hide()
  const productId = $(event.target).data('id')
  store.productId = productId
  api.getOneProduct(productId)
    .then(ui.onGetProductSuccess)
    .catch(ui.onGetProductFailure)
}

const onCreateProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createProduct(formData)
    .then($('#create-product').hide())
    .then(function (data) {
      onGetProducts(event)
    })
    .then($('form').trigger('reset'))
    .catch(ui.onCreateProductFailure)
}

const onUpdateProduct = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const productId = store.productId
  api.updateProduct(formData, productId)
    .then(function (data) {
      onGetProducts(event)
    })
    .then(ui.onUpdateProductSuccess)
    .catch(ui.onUpdateProductFailre)
}

const onDeleteProduct = event => {
  $('#update-product').hide()

  const productId = $(event.target).data('id')

  api.deleteProduct(productId)
    .then(function (data) {
      onGetProducts(event)
    })
    .catch(ui.onDeleteProductFailure)
}

const onShowUpdateProduct = event => {
  const productId = $(event.target).data('id')
  store.productId = productId
  $('#productId').text('ID: ' + productId)
  $('#update-product').show()
}
const onShowCreateProduct = event => {
  $('#create-product').show()
}

const onAddIngToRecipe = event => {
  const productRcpId = $(event.target).data('id')
  const productId = store.productId
  store.productRcpId = productRcpId
  api.getOneProduct(productRcpId)
    .then(ui.onGetProductSuccess)
    .then(ingredientApi.getAllIngredients()
      .then(ui.onShowIngredientSelectTable)
    )
    .then(
      api.getOneProduct(productId)
        .then(ui.onGetProductSuccess))
    .catch(ui.onGetProductFailure)
}

const onSelectIngredient = event => {
  const ingredientId = $(event.target).data('id')
  store.ingredientRcpId = ingredientId
  const productId = store.productRcpId
  // console.log(productId + ' ' + ingredientId)
  $('#productId1').val(productId)
  $('#ingredientId1').val(ingredientId)
}

const onDeleteRcp = event => {
  // get ingredient recipes that matches with saved productId DELETE
  // console.log(store.productId)
  const ingredientId = $(event.target).data('id')
  store.ingredientId = ingredientId
  ingredientApi.getOneIngredient(ingredientId)
    .then(ui.matchRecipe)
    .then(function (productId) {
      productId = store.productId
      api.getOneProduct(productId)
        .then(ui.onGetProductSuccess)
    })
    .catch()
}

const onClose = () => {
  $('form').trigger('reset')
}

const addHandlers = event => {
  $('.get-products').on('click', onGetProducts)
  $('.product-result').on('click', '.get-products-btn', onGetProducts)
  $('.product-result').on('click', '.show-btn', onGetOneProduct)
  $('.product-result').on('click', '.update-btn', onShowUpdateProduct)
  $('#update-product').on('submit', onUpdateProduct)
  $('.create-product').on('click', onShowCreateProduct)
  $('#create-product').on('submit', onCreateProduct)
  $('.product-result').on('click', '.delete-btn', onDeleteProduct)
  $('.product-result').on('click', '.add-ing-btn', onAddIngToRecipe)
  $('.select-ingredient-table').on('click', '.select-ing-button', onSelectIngredient)
  $('.product-result').on('click', '.rcp-delete-btn', onDeleteRcp)
  $('.clear-data').on('click', onClose)
}
module.exports = {
  addHandlers
}
