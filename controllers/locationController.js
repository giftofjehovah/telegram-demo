const TelegramBaseController = require('../base.js')

class LocationController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  locationHandler ($) {
    $.sendLocation(1.2945628, 103.8582178)
  }

  get routes () {
    return {
      '/location': 'locationHandler'
    }
  }
}

module.exports = LocationController
