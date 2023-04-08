
var User = require("../models/User")

class UserController{
    async index(req, res){}

    async create(req, res){
        var {email, password, name} = req.body

        if (name == undefined) {
            res.status(400)
            res.json({erro: "Nome incorreto!"})
            return
        }
        if (password == undefined) {
            res.status(400)
            res.json({erro: "Sua senha está incorreta ou incompleta!"})
            return
        }

        if (email == undefined) {
            res.status(400)
            res.json({erro: "O email é inválido!"})
            return
        }

        //verificar se o email já existe no database
        var emailExists = await User.findEmail(email)

        if (emailExists) {
            res.status(406)
            res.json({erro: "O e-mail já está cadastrado!"})
            return
        }

        await User.new(email, password, name)

        res.status(200)
        res.send("TUDO OK!")
    }
}

module.exports = new UserController()