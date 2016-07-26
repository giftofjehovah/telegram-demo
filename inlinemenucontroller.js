const TelegramBaseController = require('./base.js')

class InlineMenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */

    callbackQuery(message){
        console.log(message);
    }
    inlineMenuHandler($) {
       $.runInlineMenu({
            layout: 2, //some layouting here
            method: 'sendMessage', //here you must pass the method name
            params: ['text'], //here you must pass the parameters for that method
            menu: [
                {
                    text: '1', //text of the button
                    callback: (callbackQuery, message) => { //to your callback will be passed callbackQuery and response from method
                        console.log(message)
                        $.sendMessage("you've selected ")
                        console.log(callbackQuery)
                    }
                },
                {
                    text: 'Exit',
                    message: 'Are you sure?',
                    layout: 2,
                    oneTimeKeyboard: true,
                    callback: (callbackQuery, message) => {
                        $.sendMessage("exiting...")
                    }
                }
            ]
        })
    }


    get routes() {
        return {
            '/inline': 'inlineMenuHandler'
        }
    }
}

module.exports = InlineMenuController