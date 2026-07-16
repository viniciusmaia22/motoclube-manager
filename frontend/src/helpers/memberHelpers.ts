export function obterStatusValor(status: string | number): number {
  if (typeof status === "number") {
    return status;
  }

  const statusMap: Record<string, number> = {
    Ativo: 1,
    Licenciado: 2,
    Suspenso: 3,
    Inativo: 4,
    Desligado: 5,
  };

  return statusMap[status] ?? 1;
}

export function obterCargoValor(cargo: string | number): number {
  if (typeof cargo === "number") {
    return cargo;
  }

  const cargoMap: Record<string, number> = {
    Padrao: 1,
    Secretario: 2,
    DiretorFinanceiro: 3,
    DiretorEventos: 4,
    SgtArmas: 5,
    VicePresidente: 6,
    Presidente: 7,
  };

  return cargoMap[cargo] ?? 1;
}