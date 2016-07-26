//'use strict'
const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const PingController = require('./pingcontroller.js')
const FormController = require('./formcontroller.js')
const MenuController = require('./menucontroller.js')
const InlineMenuController = require('./inlinemenucontroller.js')
const InlineModeController = require('./inline_mode_controller.js')
//const CallbackQueryController = require('./inline_menu_controller.js')
const LocationController = require('./location_controller.js')

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