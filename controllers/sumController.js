const TelegramBaseController = require('../base.js')

class SumController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  sumHandler ($) {
    $.sendMessage(Number($.query.num1) + Number($.query.num2))
  }

  get routes () {
    return {
      '/sum :num1 :num2': 'sumHandler'
    }
  }
}

module.exports = SumController
