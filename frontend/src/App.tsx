import "./App.css";
import { membrosMock } from "./data/membrosMock";

function App() {
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
          <span>{membrosMock.length} cadastrados</span>
        </div>

        <div className="members-list">
          {membrosMock.map((membro) => (
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
      </section>
    </main>
  );
}

export default App;