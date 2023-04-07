
var User = require("../models/User")

class UserController{
    async index(req, res){}

    async create(req, res){
        var {email, password, name} = req.body

        if (email == undefined) {
            res.status(400)
            res.json({erro: "O email é inválido!"})
        }
        // if (name == undefined) {
        //     res.status(400)
        //     res.json({erro: "Nome incorreto!"})
        // }
        // if (password == undefined) {
        //     res.status(400)
        //     res.json({erro: "Sua senha está incorreta ou incompleta!"})
        // }

        await User.new(email, password, name)

        res.status(200)
        res.send("TUDO OK!")
    }
}

module.exports = new UserController()