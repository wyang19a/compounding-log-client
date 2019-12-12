const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetProducts = event => {
  event.preventDefault()
  api.getAllProducts()
    .then(ui.onGetProductsSuccess)
}
const addHandlers = event => {
  $('#get-products').on('submit', onGetProducts)
}
module.exports = {
  addHandlers
}
