const ingredientsTemplate = require('../templates/ingredients-listing.handlebars')
const ingredientTemplate = require('../templates/ingredient-listing.handlebars')

$('#ingredient-options').hide()
$('#update-ingredient').hide()
$('#create-ingredient').hide()

const onGetIngredientsSuccess = data => {
  $('#product-options').hide()
  $('#ingredient-options').show()
  $('#recipe-options').hide()
  const ingredientsHtml = ingredientsTemplate({ ingredients: data.ingredients })
  $('.ingredient-result').html(ingredientsHtml)
}

const onGetIngredientSuccess = formData => {
  const ingredientHtml = ingredientTemplate({ ingredient: formData.ingredient })

  $('.ingredient-result').html(ingredientHtml)
}

const onGetIngredientFailure = () => {
  const message = 'Please try again.'
  $('.ingredient-result').html(message)
}

const onCreateIngredientSuccess = formData => {
  const ingredient = formData.ingredient
  const ingredientHtml = `
   <h2>CREATED!</h2>
   <h3>Ingredient ID: ${ingredient.id}</h3>
   <ul>
   <li>Name: ${ingredient.name} </li>
   <li>Unit: ${ingredient.unit}</li>
   <li>Form: ${ingredient.form}</li>
   </ul>
  `
  $('.ingredient-result').html(ingredientHtml)
  $('form').trigger('reset')
}

const onCreateIngredientFailure = () => {
  const message = 'Please try again.'
  $('.ingredient-result').html(message)
}

const onUpdateIngredientSuccess = formData => {
  $('#update-ingredient').hide()
  $('form').trigger('reset')
}

const onUpdateIngredientFailre = () => {
  const message = 'Please try again.'
  $('.ingredient-result').html(message)
}

const onDeleteIngredientSuccess = formData => {
  const message = 'Ingredient was deleted'
  $('.ingredient-result').html(message)
  $('form').trigger('reset')
}

const onDeleteIngredientFailure = () => {
  const message = 'Please try again.'
  $('.ingredient-result').html(message)
}

module.exports = {
  onGetIngredientsSuccess,
  onGetIngredientSuccess,
  onGetIngredientFailure,
  onCreateIngredientSuccess,
  onCreateIngredientFailure,
  onUpdateIngredientSuccess,
  onUpdateIngredientFailre,
  onDeleteIngredientSuccess,
  onDeleteIngredientFailure
}
