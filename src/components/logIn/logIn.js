import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./logIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error en login:", error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error en registro:", error.message);
    }
  };
  return (
    <div className="navbar-log">
      {isRegistering ? (
        <form className="login-form" onSubmit={handleRegister}>
          <h3>Registrarse</h3>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Crear cuenta</button>
          <p onClick={() => setIsRegistering(false)}>
            ¿Ya tienes cuenta? Inicia sesión
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h3>Ingresar</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Ingresar</button>
          <p onClick={() => setIsRegistering(true)}>
            ¿No tienes cuenta? Regístrate
          </p>
          <button className="guest-btn" onClick={() => navigate("/")}>
            Entrar como Invitado
          </button>
        </form>
      )}
    </div>
  );
};

export default LogIn;








