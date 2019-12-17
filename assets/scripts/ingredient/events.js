const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

const onGetIngredients = event => {
  event.preventDefault()
  api.getAllIngredients()
    .then(ui.onGetIngredientsSuccess)
}

const onGetOneIngredient = event => {
  const ingredientId = $(event.target).data('id')
  api.getOneIngredient(ingredientId)
    .then(ui.onGetIngredientSuccess)
    .catch(ui.onGetIngredientFailure)
}

const onCreateIngredient = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createIngredient(formData)
    .then(function (data) {
      onGetIngredients(event)
    })
    .then($('form').trigger('reset'))
    .catch(ui.onCreateIngredientFailure)
}

const onUpdateIngredient = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const ingredientId = store.ingredientId
  api.updateIngredient(formData, ingredientId)
    .then(function (data) {
      onGetIngredients(event)
    })
    .then(ui.onUpdateIngredientSuccess)
    .catch(ui.onUpdateIngredientFailre)
}

const onDeleteIngredient = event => {
  const ingredientId = $(event.target).data('id')

  api.deleteIngredient(ingredientId)
    .then(function (data) {
      onGetIngredients(event)
    })
    .catch(ui.onDeleteIngredientFailure)
    // event.preventDefault()
    //
    // const form = event.target
    // const formData = getFormFields(form)
}

const onShowUpdateIngredient = event => {
  const ingredientId = $(event.target).data('id')
  store.ingredientId = ingredientId
  $('#ingredientId').text('ID: ' + ingredientId)
  $('#update-ingredient').show()
}

const onShowIngredientOption = () => {
  $('#ingredient-options').show()
  $('#product-options').hide()
  $('#recipe-options').hide()
}
const onShowCreateIngredient = () => {
  $('#create-ingredient').show()
}

const addHandlers = event => {
  $('#get-ingredients').on('click', onGetIngredients)
  $('.ingredient-result').on('click', '.show-btn', onGetOneIngredient)
  $('#create-ingredient').on('submit', onCreateIngredient)
  $('.ingredient-result').on('click', '.update-btn', onShowUpdateIngredient)
  $('#update-ingredient').on('submit', onUpdateIngredient)
  $('.ingredient-result').on('click', '.delete-btn', onDeleteIngredient)
  $('#show-ingredient-options').on('click', onShowIngredientOption)
  $('.create-ingredient').on('click', onShowCreateIngredient)
}
module.exports = {
  addHandlers
}
