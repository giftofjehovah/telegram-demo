const Telegram = require('telegram-node-bot')
const TelegramBaseInlineQueryController = Telegram.TelegramBaseInlineQueryController

class InlineModeController extends TelegramBaseInlineQueryController {

	inlineModeHandler($) {
		$.inlineMode(($) => {
			var msg = $.query
				tg.answerInlineQuery($.id, [{
				text: msg
			}])
				
		})
    }


}

module.exports = InlineModeController