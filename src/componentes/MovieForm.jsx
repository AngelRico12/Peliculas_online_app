import { useEffect, useState } from "react";

export default function MovieForm({ initialValues, onCancel, onSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [anio, setAnio] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (initialValues) {
      setTitulo(initialValues.titulo || "");
      setDirector(initialValues.director || "");
      setDescripcion(initialValues.descripcion || "");
      setAnio(initialValues.anio || "");
    }
  }, [initialValues]);

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    try {
      await onSubmit({ titulo, director, descripcion, anio });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: 16 }}>
      <div className="form-row">
        <label>Título</label>
        <input
          className="input"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label>Director</label>
        <input
          className="input"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Descripción</label>
        <textarea
          className="textarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Año</label>
        <input
          className="input"
          type="number"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="btn secondary"
          onClick={onCancel}
          disabled={enviando}
        >
          Cancelar
        </button>
        <button type="submit" className="btn" disabled={enviando}>
          {initialValues ? "Guardar cambios" : "Agregar película"}
        </button>
      </div>
    </form>
  );
}
