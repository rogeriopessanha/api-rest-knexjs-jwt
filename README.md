# Api Rest para um sistema de gestão de usuários com Knex.js e JWT
## 📝 Proposta:
### Esta API REST foi construída utilizando Node.js e o banco de dados MySQL gerenciado pelo HeidiSQL. 
### A API permite a gestão de usuários com as operações CRUD (criar, ler, atualizar e deletar) e é protegida por autenticação JWT
### Para facilitar a conexão com o banco de dados estou utilizando o Knex.js e o Dotenv para gerenciamento de variáveis de ambiente.
### Aplicação feita em ambiente back-end

## 💻 Tecnologias e ferramentas utilizadas:
- Nodejs
- Knexjs
- MySQL (HeidiSQL)
- Postman
- JWT
- Bcrypt
- Nodemon
- Dotenv

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
#### E algumas dessas rotas só pode ser acessada por um administrador do sistema.

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
#### Mesmo o responsável pelo banco de dados não tem acesso as senhas dos usuários e assim tornando tudo mais seguro e confiável.
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
</h1>
  
### Não é possivel fazer o cadastro com um e-mail já cadastrado no sistema, cada e-mail é único.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/erro_usuario_ja_cadastrado.png" />
</h1> 
  
### Usando o método GET, para fazer uma busca em todos os usuários do sistema. lembrando que é preciso ter feito o login antes.
<h1 align="left">
  <img width="450px" height="550px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/listando_usuarios_depois_de_logar.png" />
</h1>
   
### Caso o usuário não faça o login, a seguinte mensagem irá aparecer para ele.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/erro_lista_de_usuarios.png" />
</h1>

### Usando o método PUT para editar um usuário.
<h1 align="left">
  <img width="450px" height="550px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/editando_usuario.png" /> 
</h1>

### Usando o método DELETE para deletar um usuário.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/deletando_usuario.png" />
</h1>
 
### Erro ao tentar deletar um usuário que já foi deletado do sistema.
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/usuario_ja_deletado.png" />
</h1>

## Recuperação de senha por token:
### Usando o método POST na rota "/recoverpassword" é gerado um token que o usuário recebe por e-mail
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/recebendo_token_para_alterar_senha.png" />
</h1>

### O token fica armazenado no banco de dados, até que o usuário use o token, cada token só pode ser usado uma única vez
<h1 align="left">
  <img width="700px" height="150px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/HeidiSQL/token_gerado_recuperar_senha.png" />
</h1>

### O usuário acessa ou pode ser redirecionado para a rota "/changepassword", onde ele vai informar o número do token, nesse caso o numero "1681193667853"
### Se o número estiver correto, ele recebe a seguinte mensagem:
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/senha_alterada_com_sucesso.png" />
</h1>

### no banco de dados podemos vê que a senha foi alterada, mesmo com a criptografia do bcrypt, podemos perceber que os caracters foi mudado
### senha antiga

<h1 align="left">
  <img width="950px" height="70px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/HeidiSQL/senha_antiga.png" />
</h1>

### senha nova

<h1 align="left">
  <img width="950px" height="70px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/HeidiSQL/senha_nova.png" />
</h1>

### No banco de dados fica registrado que o token já foi usado, reparando no campo "used" onde era 0, mudou para 1.
<h1 align="left">
  <img width="700px" height="150px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/HeidiSQL/token_usado_01.png" />
</h1>

### Caso o usuário tente usar o mesmo token para mudar a senha, ele recebe a seguinte mensagem
<h1 align="left">
  <img width="450px" height="400px" src="https://github.com/rogeriopessanha/api-rest-knexjs-jwt/blob/main/assets/Postman/token_ja_foi_usado.png" />
</h1>

## Conclusão
#### Esta API REST oferece uma maneira segura e eficiente de gerenciar usuários com as operações CRUD e autenticação JWT.
####  Utilizando o Knex.js e dotenv para facilitar o desenvolvimento, manutenção e segurança da aplicação. 

##
## Autor
### Rogerio Pessanha










