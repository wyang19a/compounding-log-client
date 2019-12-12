const config = require('../config')
const store = require('../store')

const getAllProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getAllProducts
}
