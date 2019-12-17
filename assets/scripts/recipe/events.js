const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createRecipe(formData)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = events => {
  $('#create-recipe').on('submit', onCreateRecipe)
}

module.exports = {
  addHandlers
}
