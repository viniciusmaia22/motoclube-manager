import { useEffect, useState } from "react";
import "./App.css";
import {
  atualizarMembro,
  criarMembro,
  excluirMembro,
  listarMembros,
} from "./services/membrosService";
import type { Membro } from "./types/membro";

function App() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [membroEditandoId, setMembroEditandoId] = useState<number | null>(null);

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

   function iniciarEdicao(membro: Membro) {
    setMembroEditandoId(membro.id);

    setFormulario({
      nome: membro.nome,
      apelido: membro.apelido,
      telefone: membro.telefone,
      email: membro.email,
      dataIngresso: membro.dataIngresso.substring(0, 10),
      status: obterStatusValor(membro.status),
      cargo: obterCargoValor(membro.cargo),
      observacoes: membro.observacoes,
    });

    setMensagemFormulario("");
  }

  async function salvarMembro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMensagemFormulario("");

    if (!formularioValido()) {
      setMensagemFormulario("Preencha nome, apelido e data de ingresso.");
      return;
    }

    const dados = {
      ...formulario,
      dataPromocaoMeioEscudo: null,
      dataPromocaoEscudo: null,
      dataSaida: null,
    };

    try {
      setSalvando(true);

      if (membroEditandoId !== null) {
        await atualizarMembro(membroEditandoId, dados);

        const membrosAtualizados = await listarMembros();
        setMembros(membrosAtualizados);

        setMensagemFormulario("Membro atualizado com sucesso.");
      } else {
        const novoMembro = await criarMembro(dados);

        setMembros((membrosAtuais) => [...membrosAtuais, novoMembro]);

        setMensagemFormulario("Membro cadastrado com sucesso.");
      }

      setFormulario(formularioInicial);
      setMembroEditandoId(null);
    } catch {
      setMensagemFormulario("Não foi possível salvar o membro.");
    } finally {
      setSalvando(false);
    }
  }

  function cancelarEdicao() {
    setFormulario(formularioInicial);
    setMembroEditandoId(null);
    setMensagemFormulario("");
  }

  function obterStatusValor(status: string | number): number {
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

  function obterCargoValor(cargo: string | number): number {
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

  async function removerMembro(id: number) {
    const confirmou = window.confirm("Deseja realmente excluir este membro?");

    if (!confirmou) {
      return;
    }

    try {
      await excluirMembro(id);

      setMembros((membrosAtuais) =>
        membrosAtuais.filter((membro) => membro.id !== id)
      );

      if (membroEditandoId === id) {
        cancelarEdicao();
      }
    } catch {
      setErro("Não foi possível excluir o membro.");
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
          <h2>{membroEditandoId === null ? "Novo membro" : "Editar membro"}</h2>
        </div>

        <form className="member-form" onSubmit={salvarMembro}>
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
            {salvando ? "Salvando..." : membroEditandoId === null ? "Cadastrar membro" : "Salvar alterações"}
          </button>

          {membroEditandoId !== null && (
            <button className="secondary-button" type="button" onClick={cancelarEdicao}>
              Cancelar edição
            </button>
          )}
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

                <div className="member-actions">
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => iniciarEdicao(membro)}
                  >
                    Editar
                  </button>

                  <button
                    className="danger-button"
                    type="button"
                    onClick={() => removerMembro(membro.id)}
                  >
                    Excluir
                  </button>
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