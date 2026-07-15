import { useEffect, useState } from "react";
import "./App.css";
import { criarMembro, listarMembros } from "./services/membrosService";
import type { Membro } from "./types/membro";

function App() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const formularioInicial = {
    nome: "",
    apelido: "",
    telefone: "",
    email: "",
    dataIngresso: "",
    status: 1,
    cargo: 1,
    observacoes: "",
  };

  const [formulario, setFormulario] = useState(formularioInicial);
  const [mensagemFormulario, setMensagemFormulario] = useState("");
  const [salvando, setSalvando] = useState(false);

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

  function atualizarCampo(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormulario((formularioAtual) => ({
      ...formularioAtual,
      [name]: name === "status" || name === "cargo" ? Number(value) : value,
    }));
  }

  function formularioValido() {
    return (
      formulario.nome.trim() !== "" &&
      formulario.apelido.trim() !== "" &&
      formulario.dataIngresso.trim() !== ""
    );
  }

  async function cadastrarMembro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMensagemFormulario("");

    if (!formularioValido()) {
      setMensagemFormulario("Preencha nome, apelido e data de ingresso.");
      return;
    }

    try {
      setSalvando(true);

      const novoMembro = await criarMembro({
        ...formulario,
        dataPromocaoMeioEscudo: null,
        dataPromocaoEscudo: null,
        dataSaida: null,
      });

      setMembros((membrosAtuais) => [...membrosAtuais, novoMembro]);
      setFormulario(formularioInicial);
      setMensagemFormulario("Membro cadastrado com sucesso.");
    } catch {
      setMensagemFormulario("Não foi possível cadastrar o membro.");
    } finally {
      setSalvando(false);
    }
  }

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
          <h2>Novo membro</h2>
        </div>

        <form className="member-form" onSubmit={cadastrarMembro}>
          <div className="form-grid">
            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={formulario.nome}
                onChange={atualizarCampo}
              />
            </label>

            <label>
              Apelido
              <input
                type="text"
                name="apelido"
                value={formulario.apelido}
                onChange={atualizarCampo}
              />
            </label>

            <label>
              Telefone
              <input
                type="text"
                name="telefone"
                value={formulario.telefone}
                onChange={atualizarCampo}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={atualizarCampo}
              />
            </label>

            <label>
              Data de ingresso
              <input
                type="date"
                name="dataIngresso"
                value={formulario.dataIngresso}
                onChange={atualizarCampo}
              />
            </label>

            <label>
              Status
              <select
                name="status"
                value={formulario.status}
                onChange={atualizarCampo}
              >
                <option value={1}>Ativo</option>
                <option value={2}>Licenciado</option>
                <option value={3}>Suspenso</option>
                <option value={4}>Inativo</option>
                <option value={5}>Desligado</option>
              </select>
            </label>

            <label>
              Cargo
              <select
                name="cargo"
                value={formulario.cargo}
                onChange={atualizarCampo}
              >
                <option value={1}>Padrão</option>
                <option value={2}>Secretário</option>
                <option value={3}>Diretor Financeiro</option>
                <option value={4}>Diretor de Eventos</option>
                <option value={5}>Sgt. Armas</option>
                <option value={6}>Vice-presidente</option>
                <option value={7}>Presidente</option>
              </select>
            </label>
          </div>

          <label>
            Observações
            <textarea
              name="observacoes"
              value={formulario.observacoes}
              onChange={atualizarCampo}
            />
          </label>

          {mensagemFormulario && (
            <p className="feedback-message">{mensagemFormulario}</p>
          )}

          <button className="primary-button" type="submit" disabled={salvando}>
            {salvando ? "Salvando..." : "Cadastrar membro"}
          </button>
        </form>
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