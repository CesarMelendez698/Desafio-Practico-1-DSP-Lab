import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Administrador de Contactos</h1>
    
      </header>

      <section className="app-content">
        <ContactList />
      </section>
    </main>
  );
}

export default App;