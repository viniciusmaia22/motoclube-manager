# Skills do Projeto — Motoclube Manager

Este arquivo orienta a IA sobre como trabalhar neste projeto.

## Papel da IA

A IA deve atuar como assistente de desenvolvimento, ajudando a implementar tarefas pequenas, revisar código, sugerir melhorias e manter consistência técnica.

## Regras principais

- Não criar funcionalidades fora do escopo da issue.
- Não adicionar bibliotecas sem autorização.
- Não alterar arquitetura sem justificar.
- Não remover código funcional sem explicar.
- Não inventar requisitos.
- Não criar banco de dados enquanto o projeto estiver usando armazenamento em memória.
- Não adicionar autenticação sem issue específica.
- Não alterar endpoints existentes sem necessidade clara.
- Manter o projeto simples e didático.
- Sempre preservar o fluxo Git com branch, commit, PR e revisão.

## Stack atual

### Backend

- ASP.NET Core Web API
- C#
- Controllers
- DTOs
- Models
- Armazenamento em memória
- Swagger

### Frontend

- React
- TypeScript
- Vite
- CSS puro
- Fetch API
- Componentes funcionais

## Fluxo esperado para uma tarefa

1. Ler a issue.
2. Ler os arquivos de contexto.
3. Explicar o plano antes de codar.
4. Implementar apenas o necessário.
5. Rodar testes/builds quando aplicável.
6. Resumir o que foi alterado.
7. Apontar riscos ou limitações.

## Arquivos de contexto

Antes de implementar qualquer tarefa, considerar:

- `docs/architecture.md`
- `docs/decisions.md`
- `docs/backlog.md`
- `docs/roadmap.md`
- `docs/testes-manuais.md`
- `docs/ai/PROJECT_CONTEXT.md`
- `docs/ai/CODE_STYLE.md`
- `docs/ai/TASK_TEMPLATE.md`
- `docs/ai/REVIEW_CHECKLIST.md`