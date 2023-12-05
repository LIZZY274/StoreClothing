import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductAdmin from './ProductAdmin';
import DeleteProduct from './DeleteProduct';

function LandingAdmin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener los productos
    axios.get('http://54.86.213.148:3000/api/products')
      .then((response) => {
        setProducts(response.data); // Establece los productos en el estado
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <DeleteProduct />
          <ProductAdmin products={products} />
        </>
      )}
    </div>
  );
}

export default LandingAdmin;
