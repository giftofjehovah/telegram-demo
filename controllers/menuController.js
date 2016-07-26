const TelegramBaseController = require('../base.js')

class MenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */

    locationHandler($){
        function createCinemaListInlineKeyboardMarkup (cinemas) {
          return JSON.stringify({
            inline_keyboard: cinemas.map(function (cinema) {
              return [{
                text: `${cinema.brand} ${cinema.name}`,
                callback_data: '${cinema.brand}:'
              }];
            })
          });
        }

        var cinemas = [{brand : "aha", name: "hoho"}]
        var options = {
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
          reply_markup: createCinemaListInlineKeyboardMarkup(cinemas)
        };
        $.sendMessage("lol", options);


    }


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
            '/menu': 'menuHandler',
            '/location': 'locationHandler'
        }
    }
}

module.exports = MenuController