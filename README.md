# Api Rest para um sistema de gestão de usuários com Knex.js e JWT
## 📝 Proposta:
### Esta API REST foi construída utilizando Node.js e o banco de dados MySQL gerenciado pelo HeidiSQL. 
### A API permite a gestão de usuários com as operações CRUD (criar, ler, atualizar e deletar) e é protegida por autenticação JWT
### Para facilitar a conexão com o banco de dados, utilizamos o Knex.js e para gerenciamento de variáveis de ambiente, o dotenv.

## 💻 Tecnologias e ferramentas utilizadas:
- Nodejs
- Knexjs
- MySQL (HeidiSQL)
- Postman
- JWT
- Bcrypt
- Nodemon
- DotEnv

## Clonando o repositório
### Clone o repositório para a sua máquina local usando o comando:

```
git clone https://github.com/rogeriopessanha/api-rest-knexjs-jwt.git
```
## Dependências
<h1 align="left">
  <img width="300px" height="300px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/codigo/dependencias.png" />
</h1>

## Instalando as dependências
### Instale as dependências do projeto utilizando o gerenciador de pacotes npm ou yarn, executando o comando:

```
npm install ou yarn add
```
## Configurando o banco de dados
#### Configure as credenciais de acesso ao banco de dados no arquivo connection.js, dentro da pasta database.
#### Certifique-se de ter o banco de dados MySQL instalado e rodando na sua máquina local.


## Executando a aplicação
#### Para iniciar a aplicação, execute o comando:

```
npm start ou nodemon index.js
```
A aplicação será executada na porta 8686.

## Rotas da API
#### A API possui as seguintes rotas:

<h1 align="left">
  <img width="600px" height="250px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/codigo/rotas.png" />
</h1>

## Autenticação JWT
#### A API utiliza autenticação JWT para obter um token JWT válido, envie uma requisição POST para /login com as credenciais de usuário. 
#### O token será retornado no corpo da resposta e deve ser utilizado no cabeçalho das requisições protegidas.
##### Ao fazer o login, é gerado esse resultado abaixo, um token de autenticação.

<h1 align="left">
  <img width="600px" height="250px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/login_gerando_token_autenticacao.png" />
</h1>

## Criptografia de senhas com Bcrypt
#### A API utiliza a biblioteca Bcrypt para criptografar as senhas dos usuários.
#### Mesmo o responsável pelo banco de dados não tem acesso as senhas dos usuários e assim tornando tudo mais seguro e conviável.
<h1 align="left">
  <img width="900px" height="130px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/HeidiSQL/bcrypt_senhas.png" />
</h1>

## Utilização do Nodemon
#### A aplicação utiliza o Nodemon para reiniciar o servidor automaticamente sempre que um arquivo for modificado durante o desenvolvimento.

## Variáveis de ambiente com dotenv
#### A API utiliza o dotenv para gerenciamento de variáveis de ambiente. 
#### O dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env para process.env.
<h1 align="left">
  <img width="350px" height="300px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/codigo/database_dotenv.png" />
</h1>

## Funcionalidade CRUD:

### Usando o método POST, para criar um usuário.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/criando_usuario.png" />
</h1
  
##  
### Não é possivel fazer o cadastro com um e-mail já cadastrado no sistema, cada e-mail é único.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/erro_usuario_ja_cadastrado.png" />
</h1 
  
##  
### Usando o método GET, para fazer uma busca em todos os usuários do sistema. lembrando que é preciso ter feito o login antes.
<h1 align="left">
  <img width="450px" height="550px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/listando_usuarios_depois_de_logar.png" />
</h1
  
##  
### Caso o usuário não faça o login, a seguinte mensagem irá aparecer para ele.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/erro_lista_de_usuarios.png" />
</h1
  




## Conclusão
#### Esta API REST oferece uma maneira segura e eficiente de gerenciar usuários com as operações CRUD e autenticação JWT.
####  Utilizando o Knex.js e dotenv para facilitar o desenvolvimento, manutenção e segurança da aplicação.










