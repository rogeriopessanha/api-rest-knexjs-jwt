
var knex = require("../database/connection")
var bcrypt = require("bcrypt")

class User {

    //buscar os dados de todos os usuarios no sistema
    async findAll() {
        try {
            var result = await knex.select(["id", "name", "email", "role"]).table("users")
            return result
        } catch (erro) {
            console.log(erro)
            return []
        }
    }

    //buscando usuario pelo id
    async findById(id) {
        try {
            var result = await knex.select(["id", "name", "email", "role"]).where({ id: id }).table("users")
            if (result.length > 0) {
                return result[0]
            } else {
                return undefined
            }
        } catch (erro) {
            console.log(erro)
            return undefined
        }
    }


    //usando o bcrypt para a senha
    async new(email, password, name) {
        try {
            var hash = await bcrypt.hash(password, 10)
            await knex.insert({ email, password: hash, name, role: 0 }).table("users")
        } catch (erro) {
            console.log(erro)
        }
    }


    async findEmail(email) {
        try {
            var result = await knex.select("*").from("users").where({ email: email })

            if (result.length > 0) {
                return true
            } else {
                return false
            }

        } catch (erro) {
            console.log(erro)
            return false
        }
    }

    //editando um usuario
    async update(id, name, email, role) {
        var user = await this.findById(id)
        if (user != undefined) {
            var editUser = {}

            if (email != undefined) {
                if (email != user.email) {
                    var result = await this.findEmail(email)
                    if (result == false) {
                        editUser.email = email
                    }else{
                        return { status: false, erro: "O e-mail já está cadastrado" }
                    }
                }
            }

            if (name != undefined) {
                editUser.name = name
            }

            if (role != undefined) {
                editUser.role = role
            }

            try{
                await knex.update(editUser).where({id: id}).table("users")
                return { status: true }
            }catch(erro){
                return { status: false, erro: erro }
            }

        } else {
            return { status: false, erro: "O usuario não existe" }
        }
    }

}

module.exports = new User()