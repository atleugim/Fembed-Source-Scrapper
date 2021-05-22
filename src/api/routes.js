const { Router } = require('express')
const controller = require('./controllers')

const router = Router()

router
  .route('/get-source')
  .get(controller.getSource)

module.exports = router