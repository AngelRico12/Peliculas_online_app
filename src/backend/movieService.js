import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'peliculas_db',
  password: '123456',
  port: 5432
});


export async function crearPelicula(data) {
  const { titulo, director, descripcion, anio } = data;
  const result = await pool.query(
    `INSERT INTO peliculas (titulo, director, descripcion, anio, creado_en)
     VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
    [titulo, director, descripcion, anio]
  );
  return result.rows[0];
}