'use strict'

// require('jquery-ui')
const authEvents = require('./auth/events.js')
const ingredientEvents = require('./ingredient/events.js')
const productEvents = require('./product/events.js')
const recipeEvents = require('./recipe/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  ingredientEvents.addHandlers()
  productEvents.addHandlers()
  recipeEvents.addHandlers()
})
