const config = require('../config')
const store = require('../store')

const getAllIngredients = () => {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getOneIngredient = id => {
  // console.log('FormData.ingredient is' + formData.ingredient)
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createIngredient = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const updateIngredient = (formData, ingredientId) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + ingredientId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteIngredient = id => {
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  getAllIngredients,
  getOneIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient
  // getOneProductByID
}
