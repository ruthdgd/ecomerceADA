import React, { useState } from "react";
import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Estado para formulario
  const [paymentMethod, setPaymentMethod] = useState("credito");
  const [address, setAddress] = useState({
    provincia: "",
    ciudad: "",
    codigoPostal: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [cardErrors, setCardErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [success, setSuccess] = useState(false);

  // Manejar cambios en el formulario de dirección
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Manejar cambios en el formulario de tarjeta
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
    validateCardField(name, value);
  };

  // Validar campos de tarjeta
  const validateCardField = (name, value) => {
    let error = "";
    switch (name) {
      case "cardNumber":
        if (!/^\d{16}$/.test(value)) {
          error = "Número de tarjeta inválido (16 dígitos).";
        }
        break;
      case "expiryDate":
        if (!/^\d{2}\/\d{2}$/.test(value)) {
          error = "Fecha de expiración inválida (MM/AA).";
        }
        break;
      case "cvv":
        if (!/^\d{3}$/.test(value)) {
          error = "CVV inválido (3 dígitos).";
        }
        break;
      default:
        break;
    }
    setCardErrors({ ...cardErrors, [name]: error });
  };

  // Validar si todos los campos están completos y sin errores
  const isFormValid = () => {
    return (
      address.provincia &&
      address.ciudad &&
      address.codigoPostal &&
      cardDetails.cardNumber &&
      cardDetails.expiryDate &&
      cardDetails.cvv &&
      !cardErrors.cardNumber &&
      !cardErrors.expiryDate &&
      !cardErrors.cvv
    );
  };

  // Finalizar compra
  const handleCheckout = () => {
    if (isFormValid()) {
      setSuccess(true);
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };

  if (success) {
    return (
      <div className="checkout-container">
        <h2>Compra realizada con éxito 🎉</h2>
        <button className="back-home" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container-compra">
      <h2>Resumen de Compra</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toLocaleString()} (x{item.quantity})
          </li>
        ))}
      </ul>

      <h3>Seleccionar método de pago</h3>
      <label>
        <input
          type="radio"
          value="credito"
          checked={paymentMethod === "credito"}
          onChange={() => setPaymentMethod("credito")}
        />
        Tarjeta de Crédito
      </label>
      <label>
        <input
          type="radio"
          value="debito"
          checked={paymentMethod === "debito"}
          onChange={() => setPaymentMethod("debito")}
        />
        Tarjeta de Débito
      </label>

      <h3>Detalles de la Tarjeta</h3>
      <input
        type="text"
        name="cardNumber"
        placeholder="Número de Tarjeta"
        value={cardDetails.cardNumber}
        onChange={handleCardChange}
      />
      {cardErrors.cardNumber && (
        <p className="error-message">{cardErrors.cardNumber}</p>
      )}
      <input
        type="text"
        name="expiryDate"
        placeholder="Fecha de Expiración (MM/AA)"
        value={cardDetails.expiryDate}
        onChange={handleCardChange}
      />
      {cardErrors.expiryDate && (
        <p className="error-message">{cardErrors.expiryDate}</p>
      )}
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={cardDetails.cvv}
        onChange={handleCardChange}
      />
      {cardErrors.cvv && <p className="error-message">{cardErrors.cvv}</p>}

      <h3>Dirección de Envío</h3>
      <input
        type="text"
        name="provincia"
        placeholder="Provincia"
        value={address.provincia}
        onChange={handleAddressChange}
      />
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad"
        value={address.ciudad}
        onChange={handleAddressChange}
      />
      <input
        type="text"
        name="codigoPostal"
        placeholder="Código Postal"
        value={address.codigoPostal}
        onChange={handleAddressChange}
      />

      <button
        className="finalizar-compra"
        onClick={handleCheckout}
        disabled={!isFormValid()}
      >
        Finalizar Compra
      </button>
    </div>
  );
};

export default Checkout;
