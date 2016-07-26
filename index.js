//'use strict'
const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const PingController = require('./controllers/pingController.js')
const FormController = require('./controllers/formController.js')
const MenuController = require('./controllers/menuController.js')
const InlineMenuController = require('./controllers/inlineMenuController.js')
 const InlineModeController = require('./controllers/inlineModeController.js')
//const CallbackQueryController = require('./controllers/inline_menu_controller.js')
const LocationController = require('./controllers/locationController.js')

//Testing12345689bot
const tg = new Telegram.Telegram('221690595:AAFe3vJiFboEyBqB98R2lE1G40GjGQTdHcM')
//EvaCoolBot
//const tg = new Telegram.Telegram('232947211:AAFLJuWF0_e_a_SxljxLdcD06nZ0aCML6M8')

tg.router
    .when(['/ping'], new PingController())
    .when(['/form'], new FormController())
    .when(['/menu'], new MenuController())
    .when(['/inline'], new InlineMenuController())
    .inlineQuery(new InlineModeController())
  //  .callbackQuery(new CallbackQueryController())
	.when(['/location'], new LocationController())