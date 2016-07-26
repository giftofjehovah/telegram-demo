const TelegramBaseController = require('./base.js')

class LocationController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    locationHandler($) {
        $.sendLocation("singapore")
    }

    get routes() {
        return {
            '/location': 'locationHandler'
        }
    }
}

module.exports = LocationController