// import { useContext } from "react";
// import { CartContext } from "./cart";

// export function ProductItem({ product }) {
//   const { addToCart, decreaseAmount, removerFromCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   const handleRemoveFromCart = () => {
//     removeFromCart(product);
//   };

//   const handleDecreaseAmount = () => {
//     decreaseAmount(product);
//   };

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <p>Quantity: {product.amount}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       <button onClick={handleRemoveFromCart}>Remove from Cart</button>
//       <button onClick={handleDecreaseAmount}>Decrease Quantity</button>
//     </div>
//   );
// }