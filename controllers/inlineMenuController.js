const TelegramBaseController = require('../base.js')

class InlineMenuController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */

  inlineMenuHandler ($) {
    $.runInlineMenu({
      layout: 1, // some layouting here
      method: 'sendMessage', // here you must pass the method name
      params: ['asdas'], // here you must pass the parameters for that method
      menu: [
        {
          text: 'chickens', // text of the button
          callback: (callbackQuery, message) => { // to your callback will be passed callbackQuery and response from method
            $.api.answerCallbackQuery(callbackQuery.id, { text: 'You have selected chickens', show_alert: false })
          }
        },
        {
          text: 'Exit',
          message: 'Are you sure?',
          layout: 2,
          oneTimeKeyboard: true,
          callback: (callbackQuery, message) => {
            $.sendMessage('exiting...')
          }
        }
      ]
    })
  }

  get routes () {
    return {
      '/inline': 'inlineMenuHandler'
    }
  }
}

module.exports = InlineMenuController
