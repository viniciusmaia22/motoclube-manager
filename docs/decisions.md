# Decisões técnicas

## 1. Começar pelo Cadastro de Membros

### Decisão

O primeiro módulo do sistema será o Cadastro de Membros.

### Motivo

Membros são a entidade central do sistema. Promoções, punições, reuniões e atas dependem do cadastro de membros.

---

## 2. Usar API em memória na primeira fase

### Decisão

A API começará usando dados em memória.

### Motivo

O objetivo inicial é aprender a criar endpoints, integrar frontend e backend e validar o fluxo completo antes de adicionar banco de dados.

### Consequência

Os dados serão perdidos ao reiniciar a API.

---

## 3. Usar React com TypeScript

### Decisão

O frontend será desenvolvido com React e TypeScript.

### Motivo

TypeScript ajuda a criar contratos mais claros entre componentes, telas e respostas da API.

---

## 4. Usar CSS puro inicialmente

### Decisão

O frontend começará com CSS puro.

### Motivo

O foco inicial é aprender estrutura, componentes, integração e fluxo de dados, sem depender de bibliotecas visuais.

---

## 5. Não implementar autenticação no início

### Decisão

Login, usuários e permissões ficarão fora do MVP inicial.

### Motivo

Autenticação adicionaria complexidade antes de o fluxo principal estar funcionando.