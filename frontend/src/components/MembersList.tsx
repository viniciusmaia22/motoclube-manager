import type { Membro } from "../types/membro";
import { MemberCard } from "./MemberCard";
import { STATUS_OPTIONS } from "../constants/memberOptions";

type MembersListProps = {
  membros: Membro[];
  carregando: boolean;
  erro: string;
  statusFiltro: string;
  termoBusca: string;
  onStatusFilterChange: (status: string) => void;
  onSearchChange: (termo: string) => void;
  onEdit: (membro: Membro) => void;
  onDelete: (id: number) => void;
};

export function MembersList({
  membros,
  carregando,
  erro,
  statusFiltro,
  termoBusca,
  onStatusFilterChange,
  onSearchChange,
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

        <div className="filters-row">
          <label className="filter-field">
            Buscar
            <input
              type="text"
              value={termoBusca}
              placeholder="Nome ou apelido"
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>

          <label className="filter-field">
            Status
            <select
              value={statusFiltro}
              onChange={(event) => onStatusFilterChange(event.target.value)}
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
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