# Desafio INDT

Este projeto é um teste técnico proposto pelo Instituto Nacional de Desenvolvimento - INDT para a vaga de Desenvolvedor Full Stack Jr

O teste consiste em desenvolver um CRUD para gerenciar produtos e foi dividido em duas partes (Frontend e Backend) e foi desenvolvido utilizando TypeScript e Angular

Tabmém foi usado sqlite para o banco de dados

# Requesitos

Para executar os sistemas deste repositório é necessário posuir:
Node.js: https://nodejs.org/en/download/
Gerenciador de pacotes do Node (NPM): https://www.npmjs.com/

## Executando a aplicação

### Backend

Para executar o Backend da aplicacação é necessário executar os seguintes comandos:
  ```
  cd backend 
  npm install 
  npm run dev:server
  ```
A API de catálogo pode ser acessada através do endereço
    
    http://localhost:3333
    
### Frontend
Para executar o Backend da aplicação é necessário executar os seguintes comandos:
  ```
  cd frontend 
  npm install 
  npm start
  ```
A API de catálogo pode ser acessada através do endereço
    
    http://localhost:4200
    
# API de Produtos

Esta API possui funcionalidades básicas para realizar o gerenciamento de produtos, é possível executar as seguintes operacções

Listar produtos
Cadastrar produtos
Atualizar produtos
Excluir produtos

### Listar Produtos

`GET /api/products`

Este endpoint retorna dados de todos os produtos cadastrados no sistema

### Cadastrar Produto

`POST /api/products`

Este endpoint permite cadastrar um novo produto

**Request**

Name | Required | Description
-----|-----------|----------
nome   | true | Nome do produto
descricao | true  | Descrição do produto
valor | true  | Valor do produto
imagem | true  | Descrição do produto
disponivel | true | Informa se o produto esta disponível para venda 

### Visualizar Produto

`GET /api/products/:id`

Este endpoint permite visualizar um produto cadastrado, retorna 404 caso não encontrado

**Parâmetros**

Name | Required | Description
-----|-----------|----------
id   | true | ID do produto

### Atualizar Produto

`PUT /api/products/:id`

Este endpoint permite atualizar um produto cadastrado

**Parâmetros**

Name | Required | Description
-----|-----------|----------
id   | true | ID do produto

**Request**

Name | Required | Description
-----|-----------|----------
nome   | true | Nome do produto
descricao | true  | Descrição do produto
valor | true  | Valor do produto
imagem | true  | Descrição do produto
disponivel | true | Informa se o produto esta disponível para venda 

### Excluir Produto

`DELETE /api/products/:id`

Este endpoint permite excluir um produto cadastrado, retorna 404 caso não encontrado

**Parâmetros**

Name | Required | Description
-----|-----------|----------
id   | true | ID do produto

