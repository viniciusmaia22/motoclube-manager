import { CARGO_LABELS, STATUS_LABELS } from "../constants/memberOptions";
import type { MemberFormData } from "../types/membro";

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

export function obterStatusLabel(status: string | number): string {
  return STATUS_LABELS[status] ?? String(status);
}

export function obterCargoLabel(cargo: string | number): string {
  return CARGO_LABELS[cargo] ?? String(cargo);
}

export function formatarTelefone(telefone: string): string {
  const numeros = telefone.replace(/\D/g, "").slice(0, 11);

  if (numeros.length === 0) {
    return "";
  }

  const ddd = numeros.slice(0, 2);
  const resto = numeros.slice(2);

  if (resto.length === 0) {
    return `(${ddd}`;
  }

  if (resto.length <= 4) {
    return `(${ddd}) ${resto}`;
  }

  if (resto.length <= 8) {
    return `(${ddd}) ${resto.slice(0, 4)}-${resto.slice(4)}`;
  }

  return `(${ddd}) ${resto.slice(0, 5)}-${resto.slice(5)}`;
}

export function validarFormularioMembro(formulario: MemberFormData) {
  const erros: Record<string, string> = {};

  if (formulario.nome.trim() === "") {
    erros.nome = "Informe o nome do membro.";
  }

  if (formulario.apelido.trim() === "") {
    erros.apelido = "Informe o apelido do membro.";
  }

  if (formulario.dataIngresso.trim() === "") {
    erros.dataIngresso = "Informe a data de ingresso.";
  }

  if (formulario.email.trim() !== "") {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email.trim());

    if (!emailValido) {
      erros.email = "Informe um e-mail válido.";
    }
  }

  const telefoneSemMascara = formulario.telefone.replace(/\D/g, "");

  if (telefoneSemMascara !== "" && telefoneSemMascara.length < 8) {
    erros.telefone = "O telefone deve ter pelo menos 8 dígitos.";
  }

  return erros;
}