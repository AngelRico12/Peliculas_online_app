Proyecto de Películas

Aplicación fullstack que permite la gestión de películas.
En esta primera versión se incluye la funcionalidad de crear películas mediante un formulario en React conectado a una API en Node.js/Express con base de datos PostgreSQL.

Tecnologías utilizadas

Frontend: React, Fetch API

Backend: Node.js, Express, CORS

Base de datos: PostgreSQL

ORM/Driver: pg (node-postgres)

Crear la base de datos en PostgreSQL:

CREATE DATABASE peliculas_db;

CREATE TABLE peliculas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  descripcion TEXT,
  anio INT,
  creado_en TIMESTAMP DEFAULT NOW()
);


nstalación y ejecución
1. Clonar el repositorio
git clone https://github.com/AngelRico12/proyecto-peliculas.git
cd proyecto-peliculas

cd backend
npm install


DB_USER=postgres
DB_HOST=localhost
DB_NAME=peliculas_db
DB_PASSWORD=123456
DB_PORT=5432
PORT=3000


Iniciar el servidor:

npm run start


El backend se ejecutará en:
 http://localhost:3000

 cd ../frontend
npm install


npm start


Endpoints disponibles
Crear película

POST /api/peliculas

 Request (JSON):

 {
  "titulo": "Inception",
  "director": "Christopher Nolan",
  "descripcion": "Un ladrón que roba secretos a través de los sueños.",
  "anio": 2010
}
