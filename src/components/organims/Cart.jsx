// Cart.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../context/AuthContext";
import jsPDF from "jspdf";
import "jspdf-autotable";
import HeaderStore from "./HeaderStore";
import CartItem from "../molecules/CartItem";


function Cart() {
  const {
    cart,
    clearCart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    addToHistorial,
  } = useCart();
  const [userHasProducts, setUserHasProducts] = useState(false);
  const [historialProductos, setHistorialProductos] = useState([]);
  const { user } = useAuth()
  const users = user.id;

  useEffect(() => {
    const checkUserProducts = async () => {
      try {
        const response = await fetch(
          `http://54.86.213.148:3000/api/carrito/${users}/user`
        );
        if (response.ok) {
          const data = await response.json();
          setUserHasProducts(data.status);
        } else {
          throw new Error("Error al verificar productos del usuario");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (users) {
      checkUserProducts();
    }
  }, [users]);

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handlePay = async () => {
    const total = calculateTotal();
  
    // Get current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  
    // Generate PDF
    const pdf = new jsPDF();
    pdf.text("CARRITO DE COMPRAS", 20, 20);
    pdf.text(`Fecha y hora: ${formattedDate}`, 20, 30); // Display date and time
    pdf.text("Productos en el carrito:", 20, 40);
  
    // Create table with products
    const data = cart.map((product) => [
      product.title,
      product.price,
      product.quantity,
    ]);
    pdf.autoTable({
      startY: 50,
      head: [["Producto", "Precio", "Cantidad"]],
      body: data,
    });
  
    // Add row for the total
    pdf.autoTable({
      head: [["Total a pagar", "", ` $${total}`]],
      startY: pdf.autoTable.previous.finalY + 10,
    });
  
    // Save or display the PDF
    pdf.save("carrito.pdf");

   
      // cart.map((product) => (
      //   removeFromCart(product)
      // ))
    
  
    // Remove the product from the database
    const removeFromDatabase = async (productId) => {
      try {
        const response = await fetch(`http://54.86.213.148:3000/api/products/${productId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          const errorMessage = `Error al eliminar el producto del carrito en la base de datos. Código de estado: ${response.status}`;
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
  
    // Remove each product from the database and local cart
    for (const product of cart) {
      await removeFromDatabase(product.id);
      removeFromCart(product);
    }
  
    // Clear the cart after generating the PDF and removing from the database
    clearCart();
  };

  return (
    <>
         <HeaderStore />
      
      {/* <Link to="/home"> Home </Link> */}
 
      <div className="relative top-24 ">
        <h1 className="w-full flex items-center px-32 font-bold">CARRITO DE COMPRAS</h1>
        <aside className="">
          {userHasProducts ? (
            <ul className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  decreaseQuantity={() => decreaseQuantity(product)}
                  removeFromCart={() => removeFromCart(product)}
                  {...product}
                />
              ))}
              <div>
                {userHasProducts && (
                  <div>
                    <p>Total a pagar: ${calculateTotal()}</p>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={clearCart}
                  className="inline-block items-center bg-red-500 p-1 rounded-lg text-white text-2xl"
                >
                  limpiar
                </button>
                <button
                  onClick={handlePay}
                  className="inline-block items-center bg-green-500 p-1 rounded-lg text-white text-2xl"
                >
                  Pagar
                </button>
              </div>
            </ul>
          ) : (
            <p className="w-full h-full flex items-center justify-center text-2xl text-red-500">
              No tiene Producto en el carrito
            </p>
          )}
        </aside>
      </div>
    </>
  );
}

export default Cart;
