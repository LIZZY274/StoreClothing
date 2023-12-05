// Products.jsx
import { useCart } from '../../hooks/useCart.js';
import ButtonOne from '../atoms/ButtonOne.jsx';
import ButtonTwo from '../atoms/ButtonTwo.jsx';

import { useAuth } from '../../context/AuthContext.jsx';

export default function Products({ products, onImageClick }) {
  const {user} = useAuth()
  // const newproduct = {
  //   id: product.id,
  //   title: product.title,
  //   comprador: user.id
  // }
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  }

  return (
    <>
      <main className='lg:pl-[250px]  pt-[70px] lg:pt-[69px] bg-gray-100'>
        <ul className='mt-6 grid grid-cols-2  gap-x-1 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li key={product.id} className='flex px-4 overflow-hidden bg-white rounded-lg flex-col group relative'>
                <div className='w-full h-80 mx-auto flex items-center justify-center'>
                  <img
                    onClick={() => onImageClick(product.image)} // Cambia onImageClick a onClick
                    className='rounded-lg max-w-full max-h-full cursor-pointer'
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div>
                  <strong className='line-clamp-1'>{product.title}</strong>  
                  <p className=' font-medium  hidden sm:table-cell text-xl'>${product.price}</p>
                </div>
                <div>
                  <p className='line-clamp-2'>{product.description}</p>
                </div>
                <div className='flex flex-row items-center justify-between'>

                  {/* <img src={corazon} alt='' /> */}
                </div>

                <div>
                  <button
                    className='h-10 rounded-lg items-center text-black justify-center'
                    onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}
                  >
                    {
                      isProductInCart
                      ? <ButtonTwo prices='Eliminar' /> : <ButtonOne prices={product.price}
                    />
                  }   
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
