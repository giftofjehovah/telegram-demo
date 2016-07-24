//'use strict'
const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const PingController = require('./pingcontroller.js')
const FormController = require('./formcontroller.js')
//Testing12345689bot
const tg = new Telegram.Telegram('221690595:AAFe3vJiFboEyBqB98R2lE1G40GjGQTdHcM')
//EvaCoolBot
// const tg = new Telegram.Telegram('232947211:AAFLJuWF0_e_a_SxljxLdcD06nZ0aCML6M8')


tg.router
    .when(['ping'], new PingController())
    .when(['form'], new FormController())