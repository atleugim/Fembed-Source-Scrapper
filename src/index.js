const server = require('./api/config')
const Log = require("./utils/logger")

const port = process.env.PORT || 3000

const init = () => {
  console.clear()
  Log.info(`API running on port: ${port}`)
}

server.listen(port, () => init())