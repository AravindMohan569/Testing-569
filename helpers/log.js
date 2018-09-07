require('colors')

const { ERROR, WARNING, SUCCESS } = require('../constants/message-types')

const log = (message, type) => {
  let colorMessage

  switch (type) {
    case ERROR:
      colorMessage = `[ERROR] ${message.red}`
      break
    case WARNING:
      colorMessage = `[WARNING] ${message.yellow}`
      break
    case SUCCESS:
      colorMessage = `[SUCCESS] ${message.green}`
      break
    default:
      colorMessage = `[INFO] ${message}`
  }

  console.log(colorMessage)
}

module.exports = log
