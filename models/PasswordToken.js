
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

    //validação do token recebido por email
    async validate(token){
        try{
            var result = await knex.select().where({token: token}).table("passwordtokens")

            if (result.length > 0) {
                var tk = result[0]

                if (tk.used) {
                    return {status: false}
                }else{
                    return {status: true, token: tk}
                }
                
            }else{
                return {status: false}
            }

        }catch(erro){
            console.log(erro)
            return {status: false}
        }
    }

    //atualizando o numero de tokens usado no banco de dados (used)
    async setUsed(token){
        await knex.update({used: 1}).where({token: token}).table("passwordtokens")
    }

}

module.exports = new PasswordToken()