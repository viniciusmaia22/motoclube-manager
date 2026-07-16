# Decisões técnicas

## Backend em memória

Nesta fase, o backend utiliza armazenamento em memória.

Motivo:

- reduzir complexidade inicial;
- focar no fluxo completo entre frontend e backend;
- adiar banco de dados para uma fase posterior.

## API REST com ASP.NET Core

O backend foi criado como Web API em ASP.NET Core.

Motivo:

- boa separação entre frontend e backend;
- facilidade para expor endpoints REST;
- compatibilidade com Swagger.

## Frontend com React e TypeScript

O frontend utiliza React com TypeScript.

Motivo:

- componentização;
- tipagem estática;
- melhor organização para evolução futura.

## CSS puro

O projeto utiliza CSS puro.

Motivo:

- evitar dependência de bibliotecas visuais no início;
- manter foco em fundamentos de frontend;
- facilitar aprendizado.

## Componentes React separados

O `App.tsx` foi separado em componentes menores:

- `MemberForm`
- `MembersList`
- `MemberCard`

Motivo:

- reduzir complexidade do `App.tsx`;
- melhorar legibilidade;
- preparar o projeto para manutenção.

## Constantes e helpers separados

Opções de status, cargo e funções auxiliares foram movidas para arquivos dedicados.

Motivo:

- evitar duplicação;
- facilitar manutenção;
- preparar o código para uso assistido por IA.