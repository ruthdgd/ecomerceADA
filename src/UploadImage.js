import React, { useState } from "react";
import { uploadImageToFirestore } from "./utils/firebaseUtils";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
      uploadImageToFirestore(file); 
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && (
        <img
          src={image}
          alt="Vista previa"
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
};

export default UploadImage;