
//variaveis de ambiente
require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")


//body parser
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});
