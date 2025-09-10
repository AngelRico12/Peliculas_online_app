const API_URL = 'http://localhost:3000/api/peliculas';

// Crear película
export async function crearPelicula(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}