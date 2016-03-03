[![Build Status](https://travis-ci.org/guilherme22/focomosquito.svg?branch=master)](https://travis-ci.org/guilherme22/focomosquito)
# foco mosquito


## Iniciando

### Pre-requisitos

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Deixe ele rodando em background `mongod`

### Desenvolvimento

1. Execute `npm install` para instalar as dependencias do servidor.

2. Execute `bower install` para instalar as dependencias do client.

3. Execute `mongod` em um shell paralelo para iniciar o banco de dados mongoDB. ( caso seja Windows, vá na pasta do mongodb e execute mondod.exe)

4. Execute `grunt serve` para iniciar o servidor de desenvolvimento. Ele deve automaticamente abrir um browser quando estiver pronto.

## Build & Desenvolvimento

Execute `grunt build` para buildar o projeto e `grunt serve` para um preview.

## Testes

Execute `npm test` que será executado os testes.
