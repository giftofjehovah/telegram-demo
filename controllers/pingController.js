const TelegramBaseController = require('../base.js')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            '/ping': 'pingHandler'
        }
    }
}

module.exports = PingController