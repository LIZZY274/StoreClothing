import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CartItem({   id,
  title,
  price,
  image,
  quantity,
  addToCart,
  decreaseQuantity,
  removeFromCart,
  getProductTitle, }) {
  return (
    <li className="">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">cantidad</th>
            <th className="font-primary font-normal px-6 py-4">Precio</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          <tr className="text-sm sm:text-base text-gray-600 text-center">
            <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
              <img
                className="hidden sm:inline-flex"
                height={64}
                width={64}
                src={image}
                alt=""
              />
              <p className="pt-1 hover:text-palette-dark truncate-12">
                {title}
              </p>
            </td>
            <td className="font-primary font-medium px-4 sm:px-6 py-4">
              <div className="flex flex-row items-center justify-between">
                <button onClick={addToCart}>+</button>
                <span>{quantity}</span>
                <button onClick={decreaseQuantity}>-</button>
              </div>
            </td>
            <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
              <p>${price}</p>
            </td>
            <td className="font-primary font-medium px-4 sm:px-6 py-4">
              <button onClick={removeFromCart}>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default CartItem;
