import React, { useState } from "react";

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {};
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result.split(",")[1];
      fetch("https://34bc-205-254-171-226.ngrok-free.app/process-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      })
        .then((response) => response.json())
        .then((data) => {
          setProcessedImage(data.processed_image);
        })
        .catch((error) => console.error("Error:", error));
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${processedImage}`;
    link.download = "processed_image.jpg";
    link.click();
  };

  return (
    <div className="sketch">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Process Image</button>
      {processedImage && (
        <>
          <div style={{ height: "200px", width: "200px" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src={`data:image/jpeg;base64,${processedImage}`}
              alt="Processed Image"
            />
          </div>
          {processedImage && (
            <button onClick={handleDownload}>Download Sketch</button>
          )}
        </>
      )}
    </div>
  );
}
