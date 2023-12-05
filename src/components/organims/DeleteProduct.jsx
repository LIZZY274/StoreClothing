import React, { useState } from "react";
import axios from "axios";

function DeleteProduct() {
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      // Realiza la solicitud DELETE al servidor
      const response = await axios.delete(
        `http://54.86.213.148:3000/api/products/${productId}`
      );

      // Verifica si la solicitud fue exitosa (código de estado 204)
      if (response.status === 204) {
        setMessage("Producto eliminado exitosamente");
      } else {
        setMessage("No se pudo encontrar el producto");
      }
    } catch (error) {
      // Manejo de errores
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado que no está en el rango 2xx
        setMessage(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió ninguna respuesta
        setMessage("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2 className="px-2 text-black font-bold">Eliminar Producto por ID</h2>
      <div className="flex flex-row gap-2 items-center p-2">
        <label className="">
          ID del Producto: {""}
          <input
            className=" px-2 outline-none border-2 rounded-md border-red-300"
            type="text"
            value={productId}
            placeholder="id"
            onChange={handleInputChange}
          />
        </label>
        <button
          className="p-1 bg-red-400 rounded-2xl text-white font-medium"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteProduct;
