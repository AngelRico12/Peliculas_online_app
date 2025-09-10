import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home";
import Movies from "./paginas/Movies";
import "./index.css";


export default function App() {
return (
<BrowserRouter>
<header className="header">
<nav className="nav">
<Link to="/" className="logo">Peliculas Online</Link>
<div className="links">
<Link to="/">Inicio</Link>
<Link to="/movies">Movies</Link>
</div>
</nav>
</header>
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Movies />} />
</Routes>
</main>
<footer className="footer">© {new Date().getFullYear()} Peliculas Online App</footer>
</BrowserRouter>
);
}