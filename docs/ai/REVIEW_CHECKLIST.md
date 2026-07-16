# Checklist de Revisão de Código com IA

Use este checklist para revisar código gerado pela IA.

## Escopo

- [ ] A alteração atende à issue?
- [ ] A IA não criou funcionalidade extra?
- [ ] A IA não alterou comportamento fora do necessário?
- [ ] A IA não adicionou dependência sem autorização?

## Backend

- [ ] Endpoints existentes continuam funcionando?
- [ ] DTOs foram usados corretamente?
- [ ] Status HTTP estão adequados?
- [ ] O armazenamento em memória foi preservado?

## Frontend

- [ ] Componentes continuam funcionando?
- [ ] Tipos TypeScript estão corretos?
- [ ] Chamadas de API continuam no service?
- [ ] CSS continua simples e responsivo?
- [ ] Não há erro no console do navegador?

## Testes

- [ ] `dotnet build` passou, quando aplicável?
- [ ] `npm run build` passou, quando aplicável?
- [ ] Testes manuais foram executados?
- [ ] O fluxo principal da tela foi validado?

## Git

- [ ] Branch criada a partir da `main` atualizada?
- [ ] Commit claro?
- [ ] PR referencia a issue com `Closes #N`?
- [ ] Diff revisado antes do merge?