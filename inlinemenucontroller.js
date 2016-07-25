const TelegramBaseController = require('./base.js')

class InlineMenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    inlineMenuHandler($) {
       $.runInlineMenu({
            layout: 2, //some layouting here
            method: 'sendMessage', //here you must pass the method name
            params: ['text'], //here you must pass the parameters for that method
            menu: [
                {
                    text: '1', //text of the button
                    callback: (callbackQuery, message) => { //to your callback will be passed callbackQuery and response from method
                        console.log(1)
                    }
                },
                {
                    text: 'Exit',
                    message: 'Are you sure?',
                    layout: 2,
                    menu: [ //Sub menu (current message will be edited)
                        {
                            text: 'Yes!',
                            callback: () => {

                            }
                        },
                        {
                            text: 'No!',
                            callback: () => {

                            }
                        }
                    ]
                }
            ]
        })
    }

    get routes() {
        return {
            'inline': 'inlineMenuHandler'
        }
    }
}

module.exports = InlineMenuController