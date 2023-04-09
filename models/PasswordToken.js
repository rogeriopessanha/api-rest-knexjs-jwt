
var knex = require("../database/connection")
var User = require("./User")

class PasswordToken {
    async create(email) { 
        var user = await User.findByEmail(email)
        if (user != undefined) {
            try {

                var token = Date.now()

                await knex.insert({
                    user_id: user.id,
                    used: 0,
                    token: token
                }).table("passwordtokens")

                return { status: true, token: token }

            } catch (erro) {
                console.log(erro)
                return { status: false, erro: erro }
            }

        } else {
            return { status: false, erro: "Esse e-email não existe no banco de dados!" }
        }
    }

}

module.exports = new PasswordToken()