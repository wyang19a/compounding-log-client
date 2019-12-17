const productsTemplate = require('../templates/products-listing.handlebars')
const productTemplate = require('../templates/product-listing.handlebars')
const ingSelectTemplate = require('../templates/ingredient-select.handlebars')
const store = require('../store')
const recipeApi = require('../recipe/api')

$('#product-options').hide()
$('#update-product').hide()
$('#create-product').hide()

const onGetProductsSuccess = data => {
  $('#product-options').show()
  $('#ingredient-options').hide()
  $('#recipe-options').hide()
  const productsHtml = productsTemplate({ products: data.products })
  $('.product-result').html(productsHtml)
}

const onGetProductSuccess = formData => {
  // console.log(formData.product.recipes.amount)
  // console.log(formData)
  const productHtml = productTemplate({ product: formData.product })
  $('.product-result').html(productHtml)
  let testHtml = ''
  $('.product-result').append(() => {
    const recipe = formData.product.recipes
    const ingredient = formData.product.ingredients
    for (let i = 0; i < recipe.length; i++) {
      const match = recipe => recipe.ingredient_id === ingredient[i].id
      testHtml +=
    `
    <li>${ingredient[i].name} ${recipe.find(recipe => recipe.ingredient_id === ingredient[i].id).amount} ${recipe.find(match).unit}</li>
    `
    }
    return testHtml
  }
  )
  // $('form').trigger('reset')
}

const onGetProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onCreateProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onUpdateProductSuccess = () => {
  $('#update-product').hide()
  $('form').trigger('reset')
}

const onUpdateProductFailre = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onDeleteProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onShowIngredientSelectTable = data => {
  const ingredientsHtml = ingSelectTemplate({ ingredients: data.ingredients })
  $('.select-ingredient-table').html(ingredientsHtml)
}
const matchRecipe = data => {
  // debugger
  const recipe = data.ingredient.recipes
  const product = store.productId
  const recipeId = recipe.find(recipe => recipe.product_id === product).id
  recipeApi.deleteRecipe(recipeId)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onGetProductFailure,
  onCreateProductFailure,
  onUpdateProductSuccess,
  onUpdateProductFailre,
  // onDeleteProductSuccess,
  onDeleteProductFailure,
  onShowIngredientSelectTable,
  matchRecipe
}
