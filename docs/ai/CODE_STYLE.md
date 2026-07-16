# Padrão de Código

## Geral

- Escrever código simples e legível.
- Preferir nomes claros em português quando o projeto já usa português.
- Evitar abstrações prematuras.
- Não criar arquivos desnecessários.
- Não misturar responsabilidades.

## Backend

- Usar controllers para endpoints.
- Usar DTOs para entrada e saída de dados.
- Manter models separados dos DTOs.
- Retornar status HTTP adequados.
- Não expor detalhes internos desnecessários.
- Manter armazenamento em memória até existir issue para banco de dados.

## Frontend

- Usar componentes funcionais.
- Usar TypeScript com tipos explícitos quando ajudar a clareza.
- Manter chamadas de API dentro de `services`.
- Manter tipos dentro de `types`.
- Manter constantes dentro de `constants`.
- Manter helpers dentro de `helpers`.
- Evitar lógica complexa dentro do JSX.
- Não adicionar bibliotecas visuais sem autorização.

## CSS

- Usar CSS puro.
- Manter classes com nomes claros.
- Evitar estilos inline.
- Preservar responsividade básica.
- Não trocar o padrão visual sem necessidade.

## Git

- Cada tarefa deve ser feita em branch própria.
- O commit deve descrever a mudança.
- O PR deve referenciar a issue com `Closes #N`.