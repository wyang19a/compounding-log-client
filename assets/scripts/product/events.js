const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')
// const recipeApi = require('../recipe/api')
const ingredientApi = require('../ingredient/api')

const onGetProducts = event => {
  event.preventDefault()
  api.getAllProducts()
    .then(ui.onGetProductsSuccess)
}
// $('.show-btn').tooltip(options)
const onGetOneProduct = event => {
  $('#update-product').hide()
  const productId = $(event.target).data('id')
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
  store.productRcpId = productRcpId
  api.getOneProduct(productRcpId)
    .then(ui.onGetProductSuccess)
    .then(ingredientApi.getAllIngredients()
      .then(ui.onShowIngredientSelectTable)
    )
    .catch(ui.onGetProductFailure)
}

// $('#addIngredientModal').on('show.bs.modal', function (event) {
//   const productId = store.productRcpId // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   const modal = $(this)
//   console.log(productId)
//   modal.find('.modal-body input').val(recipient)
// })
const onSelectIngredient = event => {
  console.log('CLICKED')

  const ingredientId = $(event.target).data('id')
  store.ingredientRcpId = ingredientId
  const productId = store.productRcpId
  console.log(productId + ' ' + ingredientId)
  $('#productId1').val(productId)
  $('#ingredientId1').val(ingredientId)
//   // recipeApi.createRecipe(productId, ingredientId)
//   //   .then()
//   //   .catch()
//   debugger
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
}
module.exports = {
  addHandlers
}
