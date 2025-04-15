# To-Do API (Express)

Uma API simples para gerenciar tarefas (To-Do List) com **Node.js** e **Express.js**.

## 🚀 Funcionalidades

- **GET /todos** - Retorna todas as tarefas.
- **POST /todos** - Cria uma nova tarefa.
- **PUT /todos/:id** - Atualiza uma tarefa existente.
- **DELETE /todos/:id** - Deleta uma tarefa.
- **GET /todos?search={term}** - Filtra as tarefas por título.

## 🔧 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express.js**: Framework minimalista para criar APIs.
- **Prisma**: ORM para interação com o banco de dados.
- **Middleware personalizado**: Validação de dados para garantir a integridade das requisições.

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clonar o repositório:


git clone https://github.com/seu-usuario/todo-api.git
cd todo-api

### 2. Instalar as dependências:
npm install

### 3. Configurar o banco de dados:
Antes de rodar a API, você precisará configurar o banco de dados. O Prisma usa um banco de dados relacional, como o PostgreSQL. Configure o banco de dados no arquivo .env com as credenciais do seu banco.

### 4. Rodar o servidor:
npm run dev
A API estará rodando em http://localhost:3000.

🛠️ Endpoints

POST /todos
Cria uma nova tarefa.
Body:
{
  "title": "Estudar Node.js",
  "done": false
}

Resposta:
{
  "message": "Tarefa criada com sucesso!"
}

GET /todos
Retorna todas as tarefas.

Resposta:
[
  {
    "id": 1,
    "title": "Estudar Node.js",
    "done": false
  },
  {
    "id": 2,
    "title": "Estudar Express.js",
    "done": true
  }
]

GET /todos?search={term}
Filtra as tarefas por título.

Exemplo: /todos?search=node

Resposta:
[
  {
    "id": 1,
    "title": "Estudar Node.js",
    "done": false
  }
]

PUT /todos/:id
Atualiza uma tarefa existente.

Parâmetros:

id: ID da tarefa a ser atualizada.

Body:
{
  "title": "Estudar Express.js",
  "done": true
}
Resposta:
{
  "message": "Tarefa atualizada com sucesso!"
}
DELETE /todos/:id
Deleta uma tarefa.

Parâmetros:

id: ID da tarefa a ser deletada.

Resposta:
{
  "message": "Tarefa deletada com sucesso!"
}
🛡️ Validações
A API contém um middleware que valida os dados enviados no corpo das requisições:

O campo title deve ser do tipo string.

O campo done deve ser do tipo boolean.

Caso os dados não sejam válidos, a API retornará um erro 400 Bad Request.
```bash
