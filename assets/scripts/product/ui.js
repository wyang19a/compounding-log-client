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

module.exports = {
  onGetProductsSuccess
}
