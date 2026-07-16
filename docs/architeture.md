# Arquitetura — Motoclube Manager

## Visão geral

O projeto `motoclube-manager` é dividido em duas aplicações principais:

- Backend: ASP.NET Core Web API
- Frontend: React com TypeScript

## Estrutura geral

```text
motoclube-manager/
├── backend/
│   └── MotoclubeManager.Api/
├── frontend/
│   └── src/
├── docs/
└── .github/
```

### Backend

- O backend expõe uma API REST para gerenciamento de membros.

#### Recursos atuais

```text
GET /api/membros
GET /api/membros/{id}
GET /api/membros?status=Ativo
POST /api/membros
PUT /api/membros/{id}
DELETE /api/membros/{id}
```

#### Organização principal

```text
backend/MotoclubeManager.Api/
├── Controllers/
├── Dtos/
├── Models/
└── Program.cs
```

### Frontend

- O frontend consome a API do backend e permite gerenciar membros pela interface web.

#### Organização principal

```text
frontend/src/
├── components/
├── constants/
├── helpers/
├── services/
├── types/
├── App.tsx
└── App.css
```

## Fluxo de dados

```text
Usuário
↓
Frontend React
↓
membrosService.ts
↓
API ASP.NET Core
↓
Lista em memória
```

## Observações

- O projeto ainda não utiliza banco de dados, autenticação ou autorização.