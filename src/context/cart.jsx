import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const users = 1;

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    setCart([]); // Limpiar el carrito al cambiar de usuario
  }, [users]);
 
  const addToCart = async (product) => {
    try {
      const productInCartIndex = cart.findIndex((item) => item.id === product.id);

      if (productInCartIndex >= 0) {
        const newCart = [...cart];
        newCart[productInCartIndex].quantity += 1;
        updateCart(newCart);
      } else {
        const newCartItem = {
          ...product,
          quantity: 1,
        };

        updateCart([...cart, newCartItem]);

        // setCart((prevCart) => [...prevCart, newCartItem]);
        // localStorage.setItem("cart", JSON.stringify([...cart, newCartItem])); // Utilizar el estado actualizado
      }

      // Actualizar la base de datos
      const response = await fetch(`http://54.86.213.148:3000/api/carrito`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario_id: users, // Usar la id del usuario actual
          producto_id: product.id,
          cantidad: 1,
          status: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Error al agregar el producto al carrito en la base de datos"
        );
      }

      console.log(
        "Producto agregado al carrito y actualizado en la base de datos"
      );
    } catch (error) {
      console.error(error.message);
      // Manejar el error según tus necesidades
    }
  };

  const removeFromCart = async (product) => {
    try {
      // Verificar que product esté definido y tenga id
      if (!product || !product.id) {
        console.error(
          "El producto es undefined o no tiene un id válido"
        );
        return;
      }

      // Realizar la solicitud para eliminar el producto del carrito en el servidor
      const response = await fetch(
  
        `http://54.86.213.148:3000/api/carrito/producto/${product.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        // Puedes manejar diferentes códigos de estado aquí
        if (response.status === 404) {
          console.warn("Producto no encontrado en el carrito");
        } else {
          throw new Error(
            `Error al eliminar del carrito: ${response.status} ${response.statusText}`
          );
        }
      }

      // Eliminar el producto del carrito en el estado local
      setCart((prevState) => prevState.filter((item) => item.id !== product.id));
      updateCart(newCart);
      console.log("Producto eliminado del carrito en la base de datos");
    } catch (error) {
      console.error(error.message);
      // Puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  const decreaseQuantity = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = [...cart];
      if (newCart[productInCartIndex].quantity > 1) {
        newCart[productInCartIndex].quantity -= 1;
      }
      setCart(newCart);
    }
  };

  
  const addToHistorial = (productos) => {
    setHistorialProductos([...historialProductos, ...productos]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotalProducts = () => {
    const uniqueProducts = new Set(cart.map(item => item.id));
    return uniqueProducts.size;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        getCartTotalProducts,
        addToHistorial,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}