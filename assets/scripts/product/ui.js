$('#product-options').hide()

const onGetProductsSuccess = formData => {
  const products = formData.products
  let productHtml = ''

  products.forEach(products => {
    // console.log(products)
    productHtml += `
    <h3>Product ID: ${products.id}</h3>
    <ul>
    <li>Name: ${products.name} ${products.strength}</li>
    <li>Quantity: ${products.quantity} ${products.unit}</li>
    <li>User Email: ${products.user.email}</li>
    </ul>
    `
  })
  $('.product-result').html(productHtml)
}

const onGetProductSuccess = formData => {
  const product = formData.product
  let productHtml = `
   <h3>Product ID: ${product.id}</h3>
   <ul>
   <li>Name: ${product.name} ${product.strength}</li>
   <li>Quantity: ${product.quantity} ${product.unit}</li>
 <li>User Email: ${product.user.email}</li>

    </ul>
    <h2>Ingredients</h2>
    `
  for (let i = 0; i < product.ingredients.length; i++) {
    const ingredient = product.ingredients[i]
    const recipe = product.recipes[i]

    productHtml += `
      <ul>
      <li>${ingredient.name} </br>
      Amount: ${recipe.amount} ${recipe.unit} </br>
      Form: ${ingredient.form}</li>
      </ul>
      `
    // productHtml += product.ingredients.forEach(name)
}
  $('.product-result').html(productHtml)
  $('form').trigger('reset')
}

const onGetProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onCreateProductSuccess = formData => {
  const product = formData.product
  const productHtml = `
   <h2>CREATED!</h2>
   <h3>Product ID: ${product.id}</h3>
   <ul>
   <li>Name: ${product.name} ${product.strength}</li>
   <li>Quantity: ${product.quantity} ${product.unit}</li>
   <li>User Email: ${product.user.email}</li>
   </ul>
  `
  $('.product-result').html(productHtml)
  $('form').trigger('reset')
}

const onCreateProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onUpdateProductSuccess = formData => {
  const product = formData.product
  const productHtml = `
  <h2>UPDATED!</h2>
  <li>Name: ${product.name} ${product.strength}</li>
  <li>Quantity: ${product.quantity} ${product.unit}</li>
  <li>Name: ${product.user_id}</li>
  </ul>
  `
  $('.product-result').html(productHtml)
  $('form').trigger('reset')
}

const onUpdateProductFailre = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

const onDeleteProductSuccess = formData => {
  const message = 'Product was deleted'
  $('.product-result').html(message)
  $('form').trigger('reset')
}

const onDeleteProductFailure = () => {
  const message = 'Please try again.'
  $('.product-result').html(message)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onGetProductFailure,
  onCreateProductSuccess,
  onCreateProductFailure,
  onUpdateProductSuccess,
  onUpdateProductFailre,
  onDeleteProductSuccess,
  onDeleteProductFailure
}
