import { useState } from "react";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.telefono) {
      setError("Todos los campos son obligatorios.");
      return;
    }

   if (!/^[0-9]{4}-[0-9]{4}$/.test(form.telefono)) {
  setError("El teléfono debe tener el formato 0000-0000.");
  return;
}

    onAdd({
      id: Date.now(),
      ...form,
      favorito: false
    });

    setForm({
      nombre: "",
      apellido: "",
      telefono: ""
    });

    setError("");
  };

  return (
    <div className="card">
      <h2>Nuevo Contacto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-primary">
          Agregar Contacto
        </button>
      </form>
    </div>
  );
}

export default ContactForm;