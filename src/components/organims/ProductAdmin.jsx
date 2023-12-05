import React from "react";
import axios from "axios";

function ProductAdmin({ products, onDeleteProduct }) {
  const handleDelete = async (product) => {
    console.log("Eliminando producto con ID:", product);
    try {
      const response = await axios.delete(`http://54.86.213.148:3000/api/products/${product}`);
      console.log("Respuesta de eliminación:", response);

      if (response.status === 204) {
        // Actualizar la lista de productos después de eliminar el producto
        onDeleteProduct(product);
      } else {
        console.error("Error al eliminar el producto. Estado:", response.status);
      }
    } catch (error) {
      console.error("Error al intentar eliminar el producto:", error);
    }
  };

  return (
    <>
      <div className="bg-white grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map((product) => (
          <div className="border-2 border-blue-400" key={product.id}>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h2>
            <div className="group relative  h-full">
              <div className="w-64 h-64 mx-auto">
                <img className="max-w-full max-h-full" src={product.image} alt="" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#" className="line-clamp-2">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.description}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <p>ID: {product.id}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductAdmin;
