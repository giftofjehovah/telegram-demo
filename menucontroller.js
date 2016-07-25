const TelegramBaseController = require('./base.js')

class MenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    menuHandler($) {
        $.runMenu({
            message: 'Select an option:',
            options: {
                parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
            },
            'Exit': {
                message: 'Do you realy want to exit?',
                resizeKeyboard: true,
                oneTimeKeyboard: true,
                'yes': () => {
                    $.sendMessage('yes')
                    return;
                },
                'no': () => {
                    $.sendMessage('no')
                    return;
                }
            },
            'anyMatch': () => { //will be executed at any other message

            }
        })
    }

    get routes() {
        return {
            '/menu': 'menuHandler'
        }
    }
}

module.exports = MenuController