import { useEffect, useState } from "react";

import "./App.css";

import {
  atualizarMembro,
  criarMembro,
  excluirMembro,
  listarMembros,
} from "./services/membrosService";

import type { MemberFormData, Membro } from "./types/membro";

import { MemberForm } from "./components/MemberForm";

import { MembersList } from "./components/MembersList";

import {
  formatarTelefone,
  obterCargoValor,
  obterStatusValor,
  validarFormularioMembro,
} from "./helpers/memberHelpers";

function App() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [membroEditandoId, setMembroEditandoId] = useState<number | null>(null);

  const formularioInicial: MemberFormData = {
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
  const [errosFormulario, setErrosFormulario] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);
  const [statusFiltro, setStatusFiltro] = useState("");
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    carregarMembros();
  }, []);

  function atualizarCampo(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    const valorTratado =
      name === "telefone"
        ? formatarTelefone(value)
        : name === "status" || name === "cargo"
          ? Number(value)
          : value;

    setFormulario((formularioAtual) => ({
      ...formularioAtual,
      [name]: valorTratado,
    }));

    setErrosFormulario((errosAtuais) => {
      const errosAtualizados = { ...errosAtuais };
      delete errosAtualizados[name];
      return errosAtualizados;
    });
  }

  function validarFormulario() {
    const errosEncontrados = validarFormularioMembro(formulario);
    setErrosFormulario(errosEncontrados);

    return Object.keys(errosEncontrados).length === 0;
  }

  function iniciarEdicao(membro: Membro) {
    setMembroEditandoId(membro.id);

    setFormulario({
      nome: membro.nome,
      apelido: membro.apelido,
      telefone: formatarTelefone(membro.telefone),
      email: membro.email,
      dataIngresso: membro.dataIngresso.substring(0, 10),
      status: obterStatusValor(membro.status),
      cargo: obterCargoValor(membro.cargo),
      observacoes: membro.observacoes,
    });

    setMensagemFormulario("");
  }

  async function carregarMembros(status?: string) {
    try {
      setCarregando(true);
      setErro("");

      const dados = await listarMembros(status);
      setMembros(dados);
    } catch {
      setErro("Não foi possível carregar os membros. Tente novamente em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  function alterarFiltroStatus(novoStatus: string) {
    setStatusFiltro(novoStatus);
    carregarMembros(novoStatus || undefined);
  }

  function filtrarMembrosPorBusca(lista: Membro[]) {
    const termoNormalizado = termoBusca.trim().toLowerCase();

    if (termoNormalizado === "") {
      return lista;
    }

    return lista.filter((membro) => {
      const nome = membro.nome.toLowerCase();
      const apelido = membro.apelido.toLowerCase();

      return nome.includes(termoNormalizado) || apelido.includes(termoNormalizado);
    });
  }

  function obterMembrosVisiveis() {
    const membrosFiltradosPorStatus = statusFiltro
      ? membros.filter((membro) => membro.status === statusFiltro)
      : membros;

    return filtrarMembrosPorBusca(membrosFiltradosPorStatus);
  }
  
  async function salvarMembro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMensagemFormulario("");

    if (!validarFormulario()) {
      setMensagemFormulario("Revise os campos destacados antes de salvar.");
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

        await carregarMembros(statusFiltro || undefined);

        setMensagemFormulario("Membro atualizado com sucesso.");
      } else {
        await criarMembro(dados);

        await carregarMembros(statusFiltro || undefined);

        setMensagemFormulario("Membro cadastrado com sucesso.");
      }

      setFormulario(formularioInicial);
      setMembroEditandoId(null);
      setErrosFormulario({});
    } catch {
      setMensagemFormulario("Não foi possível salvar o membro. Verifique se a API está disponível.");
    } finally {
      setSalvando(false);
    }
  }

  function cancelarEdicao() {
    setFormulario(formularioInicial);
    setMembroEditandoId(null);
    setMensagemFormulario("");
    setErrosFormulario({});
  }

  async function removerMembro(id: number) {
    const confirmou = window.confirm("Deseja realmente excluir este membro?");

    if (!confirmou) {
      return;
    }

    try {
      await excluirMembro(id);

      await carregarMembros(statusFiltro || undefined);

      if (membroEditandoId === id) {
        cancelarEdicao();
      }
    } catch {
      setErro("Não foi possível excluir o membro. Verifique se a API está disponível.");
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

      <MemberForm
        formulario={formulario}
        mensagemFormulario={mensagemFormulario}
        errosFormulario={errosFormulario}
        salvando={salvando}
        membroEditandoId={membroEditandoId}
        onChange={atualizarCampo}
        onSubmit={salvarMembro}
        onCancelEdit={cancelarEdicao}
      />

      <MembersList
        membros={obterMembrosVisiveis()}
        carregando={carregando}
        erro={erro}
        statusFiltro={statusFiltro}
        termoBusca={termoBusca}
        onStatusFilterChange={alterarFiltroStatus}
        onSearchChange={setTermoBusca}
        onEdit={iniciarEdicao}
        onDelete={removerMembro}
      />
    </main>
  );
}

export default App;