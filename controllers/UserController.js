
var User = require("../models/User")
var PasswordToken = require("../models/PasswordToken")
var jwt = require("jsonwebtoken")
var secret = process.env.DB_SECRET;
var bcrypt = require("bcrypt")

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

    //editar um usuario
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

    //deletar usuario pelo id
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


    //recuperar senha
    async recoverPassword(req, res){
        var email = req.body.email
        var result = await PasswordToken.create(email)
        if (result.status) {
            res.status(200)
            res.send("" + result.token)
        }else{
            res.status(406)
            res.send(result.erro)
        }
    }

    async changePassword(req, res){
        var token = req.body.token
        var password = req.body.password
        var isTokenValid = await PasswordToken.validate(token)
        if (isTokenValid.status) {
            await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token )
            res.status(200)
            res.send("Senha alterada com sucesso!")
        }else{
            res.status(406)
            res.send("Token inválido")
        }
    }

    async login (req, res){
        var {email, password} = req.body
        var user = await User.findByEmail(email)
        if (user != undefined) {
            var resultado = await bcrypt.compare(password, user.password)
            if (resultado) {
                var token = jwt.sign({ email: user.email, role: user.role }, secret);
                res.status(200)
                res.json({token: token})
            }
        }else{
            res.status(406)
            res.send("Senha incorreta")
        }
    }

   

}

module.exports = new UserController()