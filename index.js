// 'use strict'
const Telegram = require('telegram-node-bot')

const PingController = require('./controllers/pingController.js')
const FormController = require('./controllers/formController.js')
const MenuController = require('./controllers/menuController.js')
const InlineMenuController = require('./controllers/inlineMenuController.js')
const InlineModeController = require('./controllers/inlineModeController.js')
const SumController = require('./controllers/sumController.js')
const LocationController = require('./controllers/locationController.js')

// Testing12345689bot
const tg = new Telegram.Telegram('221690595:AAFe3vJiFboEyBqB98R2lE1G40GjGQTdHcM')

tg.router
  .when(['/ping'], new PingController())
  .when(['/sum :num1 :num2'], new SumController())
  .when(['/form'], new FormController())
  .when(['/menu'], new MenuController())
  .when(['/location'], new LocationController())
  .when(['/inline'], new InlineMenuController())
  .inlineQuery(new InlineModeController())
