const onGetProductsSuccess = formData => {
  const products = formData.products
  let productHtml = ''

  products.forEach(products => {
    productHtml += `
      <h3>Product ID: ${products.id}</h3>
      <ul>
      <li>Name: ${products.name}</li>
      </ul>
    `
  })
  $('.product-result').html(productHtml)
}

const onGetProductSuccess = formData => {
  const product = formData.product
  const productHtml = `
   <h3>Product ID: ${product.id}</h3>
   <ul>
   <li>Name: ${product.name}</li>
   </ul>
  `
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
   <li>Name: ${product.name}</li>
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
  <h3>Product ID: ${product.id}</h3>
  <ul>
  <li>Name: ${product.name}</li>
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
