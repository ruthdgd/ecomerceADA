import { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1 className="logo">ECOMMERCE</h1>

      {/* Botón del menú hamburguesa */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Menú de navegación */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/about">PRODUCTOS DESTACADOS</a>
        </li>
        <li>
          <a href="/contact">NOSOTROS</a>
        </li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>

      <div className="cart">
        <button>Carrito</button>
      </div>

      <div className="profile">
        <button>Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default Header;
