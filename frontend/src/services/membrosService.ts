import type { Membro } from "../types/membro";

const API_BASE_URL = "http://localhost:5000/api";

export async function listarMembros(): Promise<Membro[]> {
  const response = await fetch(`${API_BASE_URL}/membros`);

  if (!response.ok) {
    throw new Error("Erro ao buscar membros.");
  }

  return response.json();
}