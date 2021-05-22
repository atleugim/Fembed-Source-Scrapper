const express = require("express")
const morgan = require("morgan")

const app = express()

const routes = require('./routes')

app.use((_, res, next) => {
  res.setHeader("X-Developed-By", "Miguel Vega <atleugim>")
  next()
})

if (process.env.NODE_ENV == "production") { 
  app.use(morgan("short"))
} else {
  app.use(morgan("dev"))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)

app.get('/', (_, res) => {
  res
    .status(200)
    .json({
      success: true,
      data: {
        message: "API v1.0.0",
        apiEndpoint: '/api/v1',
        developer: 'Miguel Vega <atleugim>',
        github: 'https://github.com/atleugim'
      }
    })
})

app.use((_, res) => {
  res.status(404).json({
    success: false,
    data: {
      message: "Path not found"
    },
  })
})

module.exports = app