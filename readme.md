#  CRUD API em Node.js com MySQL

Esta é uma API simples que implementa operações CRUD (Create, Read, Update, Delete) para entidades de produto usando GraphQL, Node.js e MySQL.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- GraphQL
- MySQL

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL para a aplicação.
2. Atualize as configurações de conexão com o banco de dados no arquivo `.env` seguindo o modelo do arquivo `.env.example`.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/vybarbosa/api-produtos.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

1. Copie o arquivo `.env.example` e renomeie para `.env`.

2. Edite o arquivo `.env` e forneça as configurações do banco de dados e outras variáveis de ambiente necessárias.

## Execução

1. Inicie o servidor:

    ```bash
    npm run dev:serve
    ```

2. Acesse a API GraphQL em [http://localhost:3000/graphql](http://localhost:3000/graphql) usando um cliente GraphQL, como o [GraphQL Playground](https://www.apollographql.com/docs/graphql-playground/).

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).