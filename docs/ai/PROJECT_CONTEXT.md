# Contexto do Projeto

## Nome

Motoclube Manager

## Objetivo

Sistema para gerenciamento de membros de um motoclube.

## Estado atual

O sistema possui um backend em ASP.NET Core Web API e um frontend em React com TypeScript.

## Funcionalidades implementadas

- Listagem de membros
- Cadastro de membros
- Edição de membros
- Exclusão de membros
- Filtro de membros por status
- Mensagens de carregamento
- Mensagens de erro
- Componentes React separados
- Helpers, constantes e types organizados

## Backend atual

O backend possui endpoints REST para gerenciamento de membros:

- `GET /api/membros`
- `GET /api/membros/{id}`
- `GET /api/membros?status=Ativo`
- `POST /api/membros`
- `PUT /api/membros/{id}`
- `DELETE /api/membros/{id}`

O armazenamento ainda é em memória.

## Frontend atual

O frontend consome a API do backend e possui os seguintes elementos principais:

- `App.tsx`
- `components/MemberForm.tsx`
- `components/MembersList.tsx`
- `components/MemberCard.tsx`
- `services/membrosService.ts`
- `types/membro.ts`
- `constants/memberOptions.ts`
- `helpers/memberHelpers.ts`

## Restrições atuais

- Não usar banco de dados ainda.
- Não adicionar autenticação ainda.
- Não adicionar biblioteca visual.
- Não transformar o projeto em arquitetura complexa.
- Não substituir CSS puro por framework CSS.