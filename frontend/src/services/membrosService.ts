import type { Membro } from "../types/membro";

const API_BASE_URL = "http://localhost:5000/api";

export type CriarMembroRequest = {
  nome: string;
  apelido: string;
  telefone: string;
  email: string;
  dataIngresso: string;
  dataPromocaoMeioEscudo: string | null;
  dataPromocaoEscudo: string | null;
  dataSaida: string | null;
  status: number;
  cargo: number;
  observacoes: string;
};

export async function listarMembros(status?: string): Promise<Membro[]> {
  const url = status
    ? `${API_BASE_URL}/membros?status=${status}`
    : `${API_BASE_URL}/membros`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar membros.");
  }

  return response.json();
}

export async function criarMembro(dados: CriarMembroRequest): Promise<Membro> {
  const response = await fetch(`${API_BASE_URL}/membros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar membro.");
  }

  return response.json();
}

export async function atualizarMembro(
  id: number,
  dados: CriarMembroRequest
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/membros/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar membro.");
  }
}

export async function excluirMembro(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/membros/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir membro.");
  }
}