'use strict'

const store = require('../store')

// const showHide = () => {
//   $('.after-auth').show()
//   $('.before-auth').hide()
// }

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('You Signed Up Successfully! Now, signed in.')
}

const onSignUpFailure = () => {
  onFailure('Try Again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user // add token to store
  // console.log(store.user)
  onSuccess('You are signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
  console.log('stored token is' + store.user.token)
}

const onSignInFailure = () => {
  onFailure('Try Again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('Password change successful.')
}

const onChangePasswordFailure = () => {
  onFailure('Try again.')
}

const onSignOutSuccess = () => {
  store.user = {} // remove token from store.js
  onSuccess('Signed out!')
  $('.after-auth').hide()
  $('.before-auth').show()
  // console.log(store.user)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
