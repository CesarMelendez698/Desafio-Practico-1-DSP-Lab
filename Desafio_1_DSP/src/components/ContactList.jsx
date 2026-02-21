import { useState } from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import SearchBar from "./SearchBar";
import contactosIniciales from "../data/contacts.json";

function ContactList() {

  const [contactos, setContactos] = useState(contactosIniciales);
  const [busqueda, setBusqueda] = useState("");

  const agregarContacto = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter(c => c.id !== id));
  };

  const toggleFavorito = (id) => {
    setContactos(
      contactos.map(c =>
        c.id === id ? { ...c, favorito: !c.favorito } : c
      )
    );
  };

  const contactosFiltrados = contactos
    .filter(c =>
      `${c.nombre} ${c.apellido}`
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    )
    .sort((a, b) => b.favorito - a.favorito);

  return (
    <div className="container">
      <ContactForm onAdd={agregarContacto} />
      <SearchBar value={busqueda} onChange={setBusqueda} />

      <div className="contact-list">
        {contactosFiltrados.map(contacto => (
          <Contact
            key={contacto.id}
            contacto={contacto}
            onDelete={eliminarContacto}
            onToggle={toggleFavorito}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;