import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Función para subir imagen como base64
export const uploadImageToFirestore = async (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    const base64Image = reader.result; // Convertimos la imagen a base64

    try {
      await addDoc(collection(db, "images"), { image: base64Image });
      console.log("Imagen subida correctamente a Firestore");
    } catch (error) {
      console.error("Error subiendo la imagen:", error);
    }
  };
};
