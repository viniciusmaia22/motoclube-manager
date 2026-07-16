# Testes manuais

## Backend

### Executar API

```text
cd backend/MotoclubeManager.Api
dotnet run --urls http://localhost:5000
```

### Endpoints testados

- GET /api/membros
- GET /api/membros/{id}
- GET /api/membros?status=Ativo
- POST /api/membros
- PUT /api/membros/{id}
- DELETE /api/membros/{id}

## Frontend

### Executar frontend

```text
cd frontend
npm run dev
```

### Fluxos testados

- Abrir tela inicial
- Listar membros
- Cadastrar membro
- Validar campos obrigatórios
- Editar membro
- Cancelar edição
- Excluir membro
- Cancelar exclusão
- Filtrar por status
- Voltar para opção Todos
- Testar erro com API parada

### Build

```text
cd frontend
npm run build
```

## Critérios de aprovação

- Backend executa sem erro
- Frontend executa sem erro
- Build do frontend passa
- Fluxos principais funcionam
- Não há erro no console do navegador