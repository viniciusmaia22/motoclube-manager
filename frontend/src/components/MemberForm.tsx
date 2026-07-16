import type { MemberFormData } from "../types/membro";

import {
  CARGO_FORM_OPTIONS,
  STATUS_FORM_OPTIONS,
} from "../constants/memberOptions";

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
              {STATUS_FORM_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Cargo
            <select name="cargo" value={formulario.cargo} onChange={onChange}>
              {CARGO_FORM_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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