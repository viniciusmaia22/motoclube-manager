import type { Membro } from "../types/membro";

type MemberCardProps = {
  membro: Membro;
  onEdit: (membro: Membro) => void;
  onDelete: (id: number) => void;
};

export function MemberCard({ membro, onEdit, onDelete }: MemberCardProps) {
  return (
    <article className="member-card">
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
          onClick={() => onEdit(membro)}
        >
          Editar
        </button>

        <button
          className="danger-button"
          type="button"
          onClick={() => onDelete(membro.id)}
        >
          Excluir
        </button>
      </div>
    </article>
  );
}