import { useEffect, useState } from "react";
import MovieForm from "../componentes/MovieForm";
import MovieCard from "../componentes/MovieCard";

function Movies() {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [peliculas, setPeliculas] = useState([]);

  async function refresh() {
    const data = await listarPeliculas();
    setPeliculas(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  function startCreate() {
    setEditing(null);
    setShowForm(true);
  }

  function startEdit(pelicula) {
    setEditing(pelicula);
    setShowForm(true);
  }

  async function handleSubmit(payload) {
    if (editing) {
      await actualizarPelicula(editing.id, payload);
    } else {
      await crearPelicula(payload);
    }
    setShowForm(false);
    setEditing(null);
    await refresh();
  }

  async function handleDelete(id) {
    if (confirm("¿Eliminar esta película?")) {
      await eliminarPelicula(id);
      await refresh();
    }
  }

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h2>Gestión de Películas</h2>
        <button className="btn" onClick={startCreate}>
          Nueva Película
        </button>
      </div>

      {showForm && (
        <MovieForm
          initialValues={editing}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSubmit={handleSubmit}
        />
      )}

      <div className="grid">
        {peliculas.length === 0 && (
          <p>No hay películas aún. ¡Agrega la primera!</p>
        )}
        {peliculas.map((p) => (
          <MovieCard
            key={p.id}
            movie={p}
            onEdit={startEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

import {

  crearPelicula
} from "../servicios/movieService";


export default Movies;
