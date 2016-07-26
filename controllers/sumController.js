const TelegramBaseController = require('../base.js')

class SumController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    sumHandler($) {
        $.sendMessage(parseInt($.query.num1) + parseInt($.query.num2))
    }

    get routes() {
        return {
            '/sum :num1 :num2': 'sumHandler'
        }
    }
}

module.exports = SumController