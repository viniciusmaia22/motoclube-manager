import type { Membro } from "../types/membro";

const API_BASE_URL = "http://localhost:5000/api";

function tratarErroApi(message: string, error: unknown): never {
  if (error instanceof Error) {
    if (error.message === message) {
      throw error;
    }
  }

  throw new Error(message);
}

export type SalvarMembroRequest = {
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

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possível carregar os membros.");
    }

    return response.json();
  } catch (error) {
    tratarErroApi("Não foi possível carregar os membros.", error);
  }
}

export async function criarMembro(dados: SalvarMembroRequest): Promise<Membro> {
  try {
    const response = await fetch(`${API_BASE_URL}/membros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Não foi possível salvar o membro.");
    }

    return response.json();
  } catch (error) {
    tratarErroApi("Não foi possível salvar o membro.", error);
  }
}

export async function atualizarMembro(
  id: number,
  dados: SalvarMembroRequest
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/membros/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Não foi possível salvar o membro.");
    }
  } catch (error) {
    tratarErroApi("Não foi possível salvar o membro.", error);
  }
}

export async function excluirMembro(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/membros/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Não foi possível excluir o membro.");
    }
  } catch (error) {
    tratarErroApi("Não foi possível excluir o membro.", error);
  }
}