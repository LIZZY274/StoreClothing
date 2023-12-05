import React, { useState } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
import Swal from "sweetalert2";
import InputsAdmin from "../molecules/InputsAdmin";

export function IconAddRopa() {
  return (
    <>
      <Link className="" to="/add">
        <div className=" border-2 hover:bg-[#9dc49c] border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center hover:top-1">
          <img src="" alt="" />
        </div>
      </Link>
    </>
  );
}

function FormAddRopa() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    color: "",
    size: "",
    type: "",
    image: "",
    amount: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://54.86.213.148:3000/api/products",
        formData
      );
      console.log("Producto registrado:", response.data);
  
      Swal.fire({
        icon: "success",
        title: "Producto Agregado",
        text: "El producto se ha agregado correctamente.",
      });
  
      // Redirige al usuario a /home/admin
    } catch (error) {
      console.error("Error al registrar el producto:", error);
  
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al agregar el producto. Por favor, inténtalo nuevamente.",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 border-2">
          <InputsAdmin 
            title="Product title"
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
            placeholder="Products title"
          />

          <InputsAdmin 
            title="Price"
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
          />
          <InputsAdmin 
            title="Description"
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
          />
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="childrens_clothing">Children's Clothing</option>
            </select>
          </div>

          <InputsAdmin
            title="Color"
            type="text"
            id="color"
            name="color"
            placeholder="Color"
            onChange={handleInputChange}
          />
 
          <InputsAdmin
            title="Size"
            type="text"
            id="size"
            name="size"
            placeholder="Size"
            onChange={handleInputChange}
          />
          <InputsAdmin 
            title="Type"
            type="text"
            id="type"
            name="type"
            placeholder="Type"
            onChange={handleInputChange}
          />
          <InputsAdmin
            title="Imagen URL"
            type="text"
            id="image"
            name="image"
            placeholder="Imagen URL"
            onChange={handleInputChange}
          />
          <InputsAdmin 
            title="Amount"
            type="text"
            id="amount"
            name="amount"
            placeholder="Amount"
            onChange={handleInputChange}
          />


        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Product
        </button>
      </form>
    </>
  );
}

export default FormAddRopa;
