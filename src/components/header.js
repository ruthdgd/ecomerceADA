import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./header.css";

const Header = ({ setFilterType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav>
      <h1 className="logo">RHIE</h1>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/featured">PRODUCTOS DESTACADOS</a>
        </li>
        <li>
          <a href="/about">NOSOTROS</a>
        </li>
      </ul>
      <div className="filter">
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">Todos</option>
          <option value="aros">Aros</option>
          <option value="anillo">Anillos</option>
          <option value="collar">Collares</option>
          <option value="pulsera">Pulseras</option>
        </select>
      </div>

      <div className="cart">
        <Link to="/cart">
          <button>🛒 Carrito</button>
        </Link>
      </div>

      <div className="profile">
        {user ? (
          <button onClick={logout}>Cerrar sesión</button>
        ) : (
          <Link to="/logIn">
            <button>👤 Iniciar sesión</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;