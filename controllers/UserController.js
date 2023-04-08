
var User = require("../models/User")

class UserController {
    async index(req, res) {
        var users = await User.findAll()
        res.json(users)
    }

    async findUser(req, res) {
        var id = req.params.id
        var user = await User.findById(id)
        if (user == undefined) {
            res.status(404)
            res.json()
        } else {
            res.status(200)
            res.json(user)
        }
    }

    async create(req, res) {
        var { email, password, name } = req.body

        if (name == undefined) {
            res.status(400)
            res.json({ erro: "Nome incorreto!" })
            return
        }
        if (password == undefined) {
            res.status(400)
            res.json({ erro: "Sua senha está incorreta ou incompleta!" })
            return
        }

        if (email == undefined) {
            res.status(400)
            res.json({ erro: "O email é inválido!" })
            return
        }

        //verificar se o email já existe no database
        var emailExists = await User.findEmail(email)

        if (emailExists) {
            res.status(406)
            res.json({ erro: "Esse e-mail já está cadastrado!" })
            return
        }

        await User.new(email, password, name)

        res.status(200)
        res.send("TUDO OK!")
    }

    async edit(req, res) {
        var { id, name, email, role } = req.body
        var result = await User.update(id, name, email, role)

        if (result != undefined) {
            if (result.status) {
                res.status(200)
                res.send("TUDO OK")
            } else {
                res.status(406)
                res.send(result.erro)
            }
        }else{
            res.status(406)
                res.send("Ocorreu um erro no servidor!")
        }
    }

    async delete(req, res){
        var id = req.params.id
        var result = await User.delete(id)

        if (result.status) {
            res.status(200)
            res.send("TUDO OK")
        }else{
            res.status(406)
            res.send(result.erro)
        }
    }
}

module.exports = new UserController()