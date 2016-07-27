const TelegramBaseController = require('../base.js')

class MenuController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  menuHandler ($) {
    $.runMenu({
      message: 'Select an option:',
      options: {
        parse_mode: 'Markdown'
      },
      'Exit': {
        message: 'Do you really want to exit?',
        resizeKeyboard: true,
        oneTimeKeyboard: true,
        'yes': () => {
          return $.sendMessage('yes')
        },
        'no': () => {
          return $.sendMessage('no')
        }
      },
      'anyMatch': () => {

      }
    })
  }

  get routes () {
    return {
      '/menu': 'menuHandler'
    }
  }
}

module.exports = MenuController
