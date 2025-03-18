import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ShowImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "images"));
      const imageList = querySnapshot.docs.map((doc) => doc.data().image);
      setImages(imageList);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Imagen desde Firestore"
          style={{ width: 200, height: 200 }}
        />
      ))}
    </div>
  );
};

export default ShowImages;