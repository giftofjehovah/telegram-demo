const Telegram = require('telegram-node-bot')
const TelegramBaseInlineQueryController = Telegram.TelegramBaseInlineQueryController

class InlineModeController extends TelegramBaseInlineQueryController {

	handle($) {
		console.log($)
			var results = []
			for(var i = 0; i < 10; i++){
			results.push({
				id: i + "",
				type: 'gif',
				gif_url: 'http://thecatapi.com/api/images/get?format=src&size=med&type=gif&uid=' + Math.random().toString(36).substring(2),
				gif_width: 250,
				gif_height: 250,
				thumb_url: 'http://thecatapi.com/api/images/get?format=src&size=small&type=gif&uid=' + Math.random().toString(36).substring(2)
			});
			}
			$.answer(results, 10)		
		// $.inlineMode(($) => {
		// 	var results = []
		// 	for(var i = 0; i < 10; i++){
		// 	results.push({
		// 		type: 'gif',
		// 		gif_url: 'http://thecatapi.com/api/images/get?format=src&size=med&type=gif&uid=' + Math.random().toString(36).substring(2),
		// 		gif_width: 250,
		// 		gif_height: 250,
		// 		thumb_url: 'http://thecatapi.com/api/images/get?format=src&size=small&type=gif&uid=' + Math.random().toString(36).substring(2)
		// 	});
		// 	}
		// 	$.paginatedAnswer(results, 10)		
		// })
    }


}

module.exports = InlineModeController