import React, { useState } from "react";
import "./aboutUs.css";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    provincia: "",
    ciudad: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.includes("@"))
      newErrors.email = "Debe ingresar un email válido";
    if (!formData.provincia) newErrors.provincia = "Campo obligatorio";
    if (!formData.ciudad) newErrors.ciudad = "Campo obligatorio";
    if (!formData.mensaje) newErrors.mensaje = "Debe escribir un mensaje";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = validateForm(); 
    setIsValid(formIsValid); 

    if (formIsValid) {
      alert("Mensaje enviado con éxito ");
      setFormData({
        nombre: "",
        email: "",
        provincia: "",
        ciudad: "",
        mensaje: "",
      });
    }
  };
  return (
    <div className="about-container">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una tienda especializada en accesorios exclusivos y de calidad,
        ofreciendo una gran variedad de collares, pulseras, aros y más. Nos
        apasiona la moda y buscamos brindarte piezas únicas para cada ocasión.
      </p>

      <h3>Contáctanos</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && (
          <span className="error-message">{errors.nombre}</span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <input
          type="text"
          name="provincia"
          placeholder="Provincia"
          value={formData.provincia}
          onChange={handleChange}
        />
        {errors.provincia && (
          <span className="error-message">{errors.provincia}</span>
        )}

        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
        />
        {errors.ciudad && (
          <span className="error-message">{errors.ciudad}</span>
        )}

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.mensaje}
          onChange={handleChange}
        />
        {errors.mensaje && (
          <span className="error-message">{errors.mensaje}</span>
        )}

        <button className="submit-button" type="submit" disabled={!isValid}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default AboutUs;