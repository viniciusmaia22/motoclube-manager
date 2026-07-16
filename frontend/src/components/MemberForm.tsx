type MemberFormData = {
  nome: string;
  apelido: string;
  telefone: string;
  email: string;
  dataIngresso: string;
  status: number;
  cargo: number;
  observacoes: string;
};

type MemberFormProps = {
  formulario: MemberFormData;
  mensagemFormulario: string;
  salvando: boolean;
  membroEditandoId: number | null;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancelEdit: () => void;
};

export function MemberForm({
  formulario,
  mensagemFormulario,
  salvando,
  membroEditandoId,
  onChange,
  onSubmit,
  onCancelEdit,
}: MemberFormProps) {
  return (
    <section className="card">
      <div className="card-header">
        <h2>{membroEditandoId === null ? "Novo membro" : "Editar membro"}</h2>
      </div>

      <form className="member-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={onChange}
            />
          </label>

          <label>
            Apelido
            <input
              type="text"
              name="apelido"
              value={formulario.apelido}
              onChange={onChange}
            />
          </label>

          <label>
            Telefone
            <input
              type="text"
              name="telefone"
              value={formulario.telefone}
              onChange={onChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={onChange}
            />
          </label>

          <label>
            Data de ingresso
            <input
              type="date"
              name="dataIngresso"
              value={formulario.dataIngresso}
              onChange={onChange}
            />
          </label>

          <label>
            Status
            <select name="status" value={formulario.status} onChange={onChange}>
              <option value={1}>Ativo</option>
              <option value={2}>Licenciado</option>
              <option value={3}>Suspenso</option>
              <option value={4}>Inativo</option>
              <option value={5}>Desligado</option>
            </select>
          </label>

          <label>
            Cargo
            <select name="cargo" value={formulario.cargo} onChange={onChange}>
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
            onChange={onChange}
          />
        </label>

        {mensagemFormulario && (
          <p className="feedback-message">{mensagemFormulario}</p>
        )}

        <button className="primary-button" type="submit" disabled={salvando}>
          {salvando
            ? "Salvando..."
            : membroEditandoId === null
              ? "Cadastrar membro"
              : "Salvar alterações"}
        </button>

        {membroEditandoId !== null && (
          <button
            className="secondary-button"
            type="button"
            onClick={onCancelEdit}
          >
            Cancelar edição
          </button>
        )}
      </form>
    </section>
  );
}