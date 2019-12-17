$('#recipe-options').hide()

const onGetRecipesSuccess = formData => {
  const recipes = formData.recipes
  let recipeHtml = ''

  recipes.forEach(recipes => {
    // console.log(recipes)
    recipeHtml += `
    <h3>Recipe ID: ${recipes.id}</h3>
    <ul>
    <li>Prouct: ${recipes.product_id}</li>
    </ul>
    `
    // for (let i = 0; i < recipes.ingredient.length; i++) {
    //   const ingredient = recipes.ingredient[i]
    //
    //   `<li>Ingredients: ${recipes.quantity} ${recipes.unit}</li>`
    // }
    // `<li>Ingredients: ${recipes.quantity} ${recipes.unit}</li>
    // <li>User Email: ${recipes.user.email}</li>
    // </ul>
    // `
  })
  $('.recipe-result').html(recipeHtml)
}

const onGetRecipeSuccess = formData => {
  const recipe = formData.recipe
  const recipeHtml = `
   <h3>Recipe ID: ${recipe.id}</h3>
   <ul>
   <li>Name: ${recipe.product}</li>

    </ul>
    `
  // for (let i = 0; i < recipe.ingredients.length; i++) {
  //   const ingredient = recipe.ingredients[i]
  //   const recipe = recipe.recipes[i]
  //
  //   recipeHtml += `
  //     <ul>
  //     <li>${ingredient.name} </br>
  //     Amount: ${recipe.amount} ${recipe.unit} </br>
  //     Form: ${ingredient.form}</li>
  //     </ul>
  //     `
  // recipeHtml += recipe.ingredients.forEach(name)
  // }
  $('.recipe-result').html(recipeHtml)
  $('form').trigger('reset')
}

const onGetRecipeFailure = () => {
  const message = 'Please try again.'
  $('.recipe-result').html(message)
}

const onCreateRecipeSuccess = formData => {
  const recipe = formData.recipe
  const recipeHtml = `
   <h2>CREATED!</h2>
   <h3>Recipe ID: ${recipe.id}</h3>
  `
  $('.recipe-result').html(recipeHtml)
  $('form').trigger('reset')
}

const onCreateRecipeFailure = () => {
  const message = 'Please try again.'
  $('.recipe-result').html(message)
}

const onUpdateRecipeSuccess = formData => {
  const recipe = formData.recipe
  const recipeHtml = `
  <h2>UPDATED!</h2>
  <li>Name: ${recipe.name} ${recipe.strength}</li>
  <li>Quantity: ${recipe.quantity} ${recipe.unit}</li>
  <li>Name: ${recipe.user_id}</li>
  </ul>
  `
  $('.recipe-result').html(recipeHtml)
  $('form').trigger('reset')
}

const onUpdateRecipeFailre = () => {
  const message = 'Please try again.'
  $('.recipe-result').html(message)
}

const onDeleteRecipeSuccess = formData => {
  const message = 'Recipe was deleted'
  $('.recipe-result').html(message)
  $('form').trigger('reset')
}

const onDeleteRecipeFailure = () => {
  const message = 'Please try again.'
  $('.recipe-result').html(message)
}

module.exports = {
  onGetRecipesSuccess,
  onGetRecipeSuccess,
  onGetRecipeFailure,
  onCreateRecipeSuccess,
  onCreateRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailre,
  onDeleteRecipeSuccess,
  onDeleteRecipeFailure
}
