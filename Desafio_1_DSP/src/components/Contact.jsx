function Contact({ contacto, onDelete, onToggle }) {
  return (
    <div className={`contact-item ${contacto.favorito ? "favorite" : ""}`}>
      <div>
        <h3>
          {contacto.favorito && <span className="star">⭐</span>}
          {contacto.nombre} {contacto.apellido}
        </h3>
        <p>{contacto.telefono}</p>
      </div>

      <div className="actions">
        <button
          className="btn-secondary"
          onClick={() => onToggle(contacto.id)}
        >
          {contacto.favorito ? "Quitar Favorito" : "Marcar Favorito"}
        </button>

        <button
          className="btn-danger"
          onClick={() => onDelete(contacto.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Contact;