const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetRecipes = event => {
  event.preventDefault()
  api.getAllRecipes()
    .then(ui.onGetRecipesSuccess)
}

const onGetOneRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log('Formdata is' + formData)
  api.getOneRecipe(formData)
    .then(ui.onGetRecipeSuccess)
    .catch(ui.onGetRecipeFailure)
}

const onCreateRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createRecipe(formData)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onCreateRecipeFailure)
}

const onUpdateRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.updateRecipe(formData)
    .then(ui.onUpdateRecipeSuccess)
    .catch(ui.onUpdateRecipeFailre)
}

const onDeleteRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.deleteRecipe(formData)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onDeleteRecipeFailure)
}

const onShowRecipeOption = () => {
  $('#recipe-options').show()
  $('#ingredient-options').hide()
  $('#product-options').hide()
}

const addHandlers = events => {
  $('#get-recipes').on('submit', onGetRecipes)
  $('#get-one-recipe').on('submit', onGetOneRecipe)
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#update-recipe').on('submit', onUpdateRecipe)
  $('#delete-recipe').on('submit', onDeleteRecipe)
  $('#show-recipe-options').on('click', onShowRecipeOption)
}

module.exports = {
  addHandlers
}
