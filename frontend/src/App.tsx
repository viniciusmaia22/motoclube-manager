import { useEffect, useState } from "react";
import "./App.css";
import { listarMembros } from "./services/membrosService";
import type { Membro } from "./types/membro";

function App() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarMembros() {
      try {
        const dados = await listarMembros();
        setMembros(dados);
      } catch {
        setErro("Não foi possível carregar os membros.");
      } finally {
        setCarregando(false);
      }
    }

    carregarMembros();
  }, []);

  return (
    <main className="app">
      <section className="page-header">
        <div>
          <h1>Motoclube Manager</h1>
          <p>Sistema de gerenciamento de membros do motoclube.</p>
        </div>

        <button className="primary-button" type="button">
          Novo membro
        </button>
      </section>

      <section className="card">
        <div className="card-header">
          <h2>Membros</h2>
          <span>{membros.length} cadastrados</span>
        </div>

        {carregando && <p className="feedback-message">Carregando membros...</p>}

        {!carregando && erro && (
          <p className="feedback-message error-message">{erro}</p>
        )}

        {!carregando && !erro && membros.length === 0 && (
          <p className="feedback-message">Nenhum membro cadastrado.</p>
        )}

        {!carregando && !erro && membros.length > 0 && (
          <div className="members-list">
            {membros.map((membro) => (
              <article className="member-card" key={membro.id}>
                <div>
                  <h3>{membro.nome}</h3>
                  <p>{membro.apelido}</p>
                </div>

                <div className="member-info">
                  <span>Status: {membro.status}</span>
                  <span>Cargo: {membro.cargo}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;