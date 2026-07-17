export const STATUS_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "Ativo", label: "Ativo" },
  { value: "Licenciado", label: "Licenciado" },
  { value: "Suspenso", label: "Suspenso" },
  { value: "Inativo", label: "Inativo" },
  { value: "Desligado", label: "Desligado" },
];

export const STATUS_FORM_OPTIONS = [
  { value: 1, label: "Ativo" },
  { value: 2, label: "Licenciado" },
  { value: 3, label: "Suspenso" },
  { value: 4, label: "Inativo" },
  { value: 5, label: "Desligado" },
];

export const STATUS_LABELS: Record<string | number, string> = {
  1: "Ativo",
  2: "Licenciado",
  3: "Suspenso",
  4: "Inativo",
  5: "Desligado",
  Ativo: "Ativo",
  Licenciado: "Licenciado",
  Suspenso: "Suspenso",
  Inativo: "Inativo",
  Desligado: "Desligado",
};

export const CARGO_FORM_OPTIONS = [
  { value: 1, label: "Padrão" },
  { value: 2, label: "Secretário" },
  { value: 3, label: "Diretor Financeiro" },
  { value: 4, label: "Diretor de Eventos" },
  { value: 5, label: "Sgt. Armas" },
  { value: 6, label: "Vice-presidente" },
  { value: 7, label: "Presidente" },
];

export const CARGO_LABELS: Record<string | number, string> = {
  1: "Padrão",
  2: "Secretário",
  3: "Diretor Financeiro",
  4: "Diretor de Eventos",
  5: "Sgt. Armas",
  6: "Vice-presidente",
  7: "Presidente",
  Padrao: "Padrão",
  Secretario: "Secretário",
  DiretorFinanceiro: "Diretor Financeiro",
  DiretorEventos: "Diretor de Eventos",
  SgtArmas: "Sgt. Armas",
  VicePresidente: "Vice-presidente",
  Presidente: "Presidente",
};