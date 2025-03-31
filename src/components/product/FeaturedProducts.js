import React from "react";
import { useCart } from "../carrito/cartContext";
import { useAuth } from "../../AuthContext";
import "../product/productList.css";

const featuredProducts = [
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
const FeaturedProducts = ({ filterType }) => {
  const { cart, addToCart } = useCart();
  const { userRole } = useAuth();

  // Filtrar los productos según el filtro global del header
  const filteredProducts =
    filterType === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.type === filterType);

  return (
    <div>
      <h2>Productos Destacados</h2>

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
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock disponible: {availableStock}</p>

              {userRole === "admin" ? (
                <p style={{ color: availableStock > 0 ? "green" : "red" }}>
                  {availableStock > 0 ? "Disponible" : "Agotado"}
                </p>
              ) : availableStock > 0 ? (
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

export default FeaturedProducts;