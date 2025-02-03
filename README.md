# 🚀 Fundamentos Nodejs

Este projeto é uma aplicação Node.js que explora conceitos fundamentais de streams, buffers e manipulação de dados. Ele inclui a implementação de um servidor HTTP que pode lidar com requisições e interagir com um banco de dados simples armazenado em um arquivo JSON.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `database.js`: Implementa a classe `Database` para manipulação de dados.
  - `server.js`: Configura o servidor HTTP e define as rotas.
  - `middlewares/`: Contém middlewares utilizados na aplicação.
    - `json.js`: Middleware para parsear requisições JSON.
- `streams/`: Contém exemplos de manipulação de streams.
  - `fundamentals.js`: Conceitos básicos sobre streams e buffers.
  - `fake-upload-to-http-stream.js`: Exemplo de upload de dados usando streams.
  - `stream-http-server.js`: Exemplo de servidor HTTP que manipula streams.
  - `buffer.js`: Exemplo de uso de buffers.
- `package.json`: Configurações do projeto e dependências.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Execução

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

## Endpoints

- `GET /users`: Retorna a lista de usuários armazenados no banco de dados.
- `POST /users`: Adiciona um novo usuário ao banco de dados. O corpo da requisição deve ser um JSON com os campos `name` e `email`.

## Licença

Este projeto está licenciado sob a Licença ISC.

