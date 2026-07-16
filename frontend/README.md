# Motoclube Manager

Sistema para gerenciamento de membros de um motoclube.

## Objetivo

O objetivo inicial do projeto é permitir o cadastro, listagem, edição, exclusão e filtro de membros.

## Tecnologias

### Backend

- ASP.NET Core Web API
- C#
- Armazenamento em memória
- Swagger

### Frontend

- React
- TypeScript
- Vite
- CSS puro

## Funcionalidades atuais

- Listar membros
- Cadastrar membros
- Editar membros
- Excluir membros
- Filtrar membros por status
- Exibir mensagens de carregamento e erro

## Como executar o backend

```text
cd backend/MotoclubeManager.Api
dotnet run --urls http://localhost:5000
```

### Swagger

```text
http://localhost:5000/swagger
```

## Como executar o frontend

```text
cd frontend
npm install
npm run dev
```

### Frontend

```text
http://localhost:5173
```

## Documentação

```text
docs/architecture.md
docs/decisions.md
docs/backlog.md
docs/roadmap.md
docs/testes-manuais.md
```

## Status do projeto

```text
Projeto em desenvolvimento, usando armazenamento em memória no backend.
```