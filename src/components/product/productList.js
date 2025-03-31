import React from "react";
import { useCart } from "../carrito/cartContext";
import { useAuth } from "../../AuthContext";
import "./productList.css";

const ProductList = ({ filterType }) => {
  const { addToCart, cart } = useCart();
  const { userRole } = useAuth();const products = [
    {
      id: 1,
      name: "Anillo Aimé",
      description: "Anillo elegante y sofisticado.",
      stock: 10,
      image: "/stock/Anillo-Aimé.jpg",
      type: "anillo",
      price: 1000,
    },
    {
      id: 2,
      name: "Anillo Gloria",
      description: "Anillo con diseño exclusivo.",
      stock: 8,
      image: "/stock/Anillo-Gloria.jpg",
      type: "anillo",
      price: 1200,
    },
    {
      id: 3,
      name: "Anillo Lazo",
      description: "Anillo con diseño en forma de lazo.",
      stock: 6,
      image: "/stock/Anillo-Lazo.jpg",
      type: "anillo",
      price: 1100,
    },
    {
      id: 4,
      name: "Anillo Rosé",
      description: "Anillo de color dorado rosado.",
      stock: 5,
      image: "/stock/Anillo-Rosé.jpg",
      type: "anillo",
      price: 900,
    },
    {
      id: 5,
      name: "Anillo Templo",
      description: "Anillo con detalles únicos.",
      stock: 7,
      image: "/stock/Anillo-Templo.jpg",
      type: "anillo",
      price: 1300,
    },
    {
      id: 6,
      name: "Anillos Twin",
      description: "Juego de dos anillos combinables.",
      stock: 4,
      image: "/stock/Anillos-Twin.jpg",
      type: "anillo",
      price: 1600,
    },
    {
      id: 7,
      name: "Aros Argolla",
      description: "Aros en forma de argolla, clásicos.",
      stock: 9,
      image: "/stock/Aros-Argolla.jpg",
      type: "aros",
      price: 800,
    },
    {
      id: 8,
      name: "Aros Corazón Dorado",
      description: "Aros en forma de corazón dorado.",
      stock: 12,
      image: "/stock/Aros-Corazon-Dorado.jpg",
      type: "aros",
      price: 1000,
    },
    {
      id: 9,
      name: "Aros Corazón",
      description: "Aros con un diseño romántico.",
      stock: 10,
      image: "/stock/Aros-Corazon.jpg",
      type: "aros",
      price: 900,
    },
    {
      id: 10,
      name: "Aros Lazos",
      description: "Aros con un diseño de lazo elegante.",
      stock: 0,
      image: "/stock/Aros-Lazos.jpg",
      type: "aros",
      price: 1100,
    },
    {
      id: 11,
      name: "Aros Oval",
      description: "Aros con forma ovalada.",
      stock: 8,
      image: "/stock/Aros-Oval.jpg",
      type: "aros",
      price: 950,
    },
    {
      id: 12,
      name: "Collar Beach",
      description: "Collar inspirado en el mar.",
      stock: 10,
      image: "/stock/Collar-Beach.jpg",
      type: "collar",
      price: 3200,
    },
    {
      id: 13,
      name: "Collar Circ",
      description: "Collar con dije circular.",
      stock: 5,
      image: "/stock/Collar-Circ.jpg",
      type: "collar",
      price: 3000,
    },
    {
      id: 14,
      name: "Collar Lotus",
      description: "Collar con un diseño de flor de loto.",
      stock: 7,
      image: "/stock/Collar-Lotus.jpg",
      type: "collar",
      price: 3600,
    },
    {
      id: 15,
      name: "Collar Summer",
      description: "Collar ideal para el verano.",
      stock: 6,
      image: "/stock/Collar-Summer.jpg",
      type: "collar",
      price: 2900,
    },
    {
      id: 16,
      name: "Pulsera Cielo",
      description: "Pulsera con tonos celestes.",
      stock: 9,
      image: "/stock/Pulsera-Cielo.jpg",
      type: "pulsera",
      price: 2500,
    },
    {
      id: 17,
      name: "Pulsera Corazón",
      description: "Pulsera con dije de corazón.",
      stock: 10,
      image: "/stock/Pulsera-Corazon.jpg",
      type: "pulsera",
      price: 2700,
    },
    {
      id: 18,
      name: "Pulsera Dark",
      description: "Pulsera con estilo oscuro.",
      stock: 4,
      image: "/stock/Pulsera-Dark.jpg",
      type: "pulsera",
      price: 2800,
    },
    {
      id: 19,
      name: "Pulsera Deseos",
      description: "Pulsera con charms de deseos.",
      stock: 8,
      image: "/stock/Pulsera-Deseos.jpg",
      type: "pulsera",
      price: 3000,
    },
    {
      id: 20,
      name: "Pulsera Lazos",
      description: "Pulsera con diseño de lazo.",
      stock: 6,
      image: "/stock/Pulsera-Lazos.jpg",
      type: "pulsera",
      price: 3100,
    },
    {
      id: 21,
      name: "Set Collares Dark",
      description: "Set de collares con tonos oscuros.",
      stock: 5,
      image: "/stock/Set-Collares-Dark.jpg",
      type: "collar",
      price: 4000,
    },
  ];
  const filteredProducts =
    filterType === "all"
      ? products
      : products.filter((p) => p.type === filterType);

  return (
    <div>
      <h2>Productos</h2>
      <div className="product-list">
        {filteredProducts.map((product) => {
          const inCart =
            cart.find((item) => item.id === product.id)?.quantity || 0;
          const availableStock = product.stock - inCart;

          return (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: 200, height: 200 }}
              />
              <h3>{product.name}</h3>
              <p>Stock disponible: {availableStock}</p>

              {userRole === "admin" ? (
                <p style={{ color: availableStock > 0 ? "green" : "red" }}>
                  {availableStock > 0 ? "Disponible" : "Agotado"}
                </p>
              ) : availableStock >= 1 ? (
                <button onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              ) : (
                <p style={{ color: "red" }}>Fuera de stock</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;