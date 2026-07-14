import type { Membro } from "../types/membro";

export const membrosMock: Membro[] = [
  {
    id: 1,
    nome: "João Silva",
    apelido: "João",
    telefone: "(21) 99999-0001",
    email: "joao@email.com",
    dataIngresso: "2024-01-15T00:00:00",
    dataPromocaoMeioEscudo: null,
    dataPromocaoEscudo: null,
    dataSaida: null,
    status: "Ativo",
    cargo: "Padrao",
    observacoes: "Membro fundador",
    dataCriacao: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    nome: "Carlos Souza",
    apelido: "Carlão",
    telefone: "(21) 99999-0002",
    email: "carlos@email.com",
    dataIngresso: "2024-03-10T00:00:00",
    dataPromocaoMeioEscudo: null,
    dataPromocaoEscudo: null,
    dataSaida: null,
    status: "Licenciado",
    cargo: "Secretario",
    observacoes: "Licenciado temporariamente",
    dataCriacao: "2024-03-10T10:00:00Z",
  },
];