import type { Membro } from "../types/membro";
import { MemberCard } from "./MemberCard";

type MembersListProps = {
  membros: Membro[];
  carregando: boolean;
  erro: string;
  statusFiltro: string;
  onStatusFilterChange: (status: string) => void;
  onEdit: (membro: Membro) => void;
  onDelete: (id: number) => void;
};

export function MembersList({
  membros,
  carregando,
  erro,
  statusFiltro,
  onStatusFilterChange,
  onEdit,
  onDelete,
}: MembersListProps) {
  return (
    <section className="card">
      <div className="card-header">
        <div>
          <h2>Membros</h2>
          <span>{membros.length} cadastrados</span>
        </div>

        <label className="filter-field">
          Status
          <select
            value={statusFiltro}
            onChange={(event) => onStatusFilterChange(event.target.value)}
          >
            <option value="">Todos</option>
            <option value="Ativo">Ativo</option>
            <option value="Licenciado">Licenciado</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Inativo">Inativo</option>
            <option value="Desligado">Desligado</option>
          </select>
        </label>
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
            <MemberCard
              key={membro.id}
              membro={membro}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}