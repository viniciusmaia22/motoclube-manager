export type StatusMembro =
  | "Ativo"
  | "Licenciado"
  | "Suspenso"
  | "Inativo"
  | "Desligado";

export type CargoMembro =
  | "Padrao"
  | "Secretario"
  | "DiretorFinanceiro"
  | "DiretorEventos"
  | "SgtArmas"
  | "VicePresidente"
  | "Presidente";

export interface Membro {
  id: number;
  nome: string;
  apelido: string;
  telefone: string;
  email: string;
  dataIngresso: string;
  dataPromocaoMeioEscudo?: string | null;
  dataPromocaoEscudo?: string | null;
  dataSaida?: string | null;
  status: StatusMembro;
  cargo: CargoMembro;
  observacoes: string;
  dataCriacao: string;
}