const TelegramBaseController = require('./base.js')

class FormController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    formHandler($) {
        const form = {
            name: {
                q: 'Send me your name',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                    if(message.text) {
                        callback(true, message.text) //you must pass the result also
                        return
                    }

                    callback(false)
                }
            },
            age: {
                q: 'Send me your age',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                    if(message.text && IsNumeric(message.text)) {
                        callback(true, toInt(message.text))
                        return
                    }
                    callback(false)
                }
            }
        }

        $.runForm(form, (result) => {
            $.sendMessage("Name is " + result.name + ". Age is " + result.age)
        })
    }

    get routes() {
        return {
            'form': 'formHandler'
        }
    }
}

module.exports = FormController