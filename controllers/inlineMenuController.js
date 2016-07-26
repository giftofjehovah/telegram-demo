const TelegramBaseController = require('../base.js')

class InlineMenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
   

    callbackQuery(message){
      //  console.log(message);
    }

    inlineMenuHandler($) {
       $.runInlineMenu({
            layout: 1, //some layouting here
            method: 'sendMessage', //here you must pass the method name
            params: ['asdas'], //here you must pass the parameters for that method
            menu: [
                {
                    text: 'bulldozer', //text of the button
                    callback: (callbackQuery, message) => { //to your callback will be passed callbackQuery and response from method
                       // $.sendMessage("you've selected bulldoze", {disable_notification: false})
                         $.api.answerCallbackQuery(callbackQuery.id, { text: 'You have selected bulldozer', show_alert: false })
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