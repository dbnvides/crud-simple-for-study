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

```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
