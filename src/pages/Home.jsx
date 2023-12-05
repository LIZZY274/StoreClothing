// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFilters } from '../hooks/useFilters';
import Header from '../components/molecules/Header';
import Products from '../components/organims/Products';
import HeaderStore from '../components/organims/HeaderStore';
import CategoryTop from '../components/organims/CategoryTop';

function Home() {
  const { filterProducts } = useFilters();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get('http://54.86.213.148:3000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error al obtener productos', error));
  }, []);

  const handleSearch = () => {
    const filteredProducts = filterProducts(products).filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    return filteredProducts;
  }

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  }

  const closeImageModal = () => {
    setSelectedImage(null);
  }

  const handleImageZoom = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;
      const aspectRatio = naturalWidth / naturalHeight;
      const maxZoomWidth = 1.2 * naturalWidth; // Ajusta el nivel de zoom aquí
      const maxZoomHeight = maxZoomWidth / aspectRatio;

      const imageModal = document.querySelector(".image-modal img");
      imageModal.style.maxWidth = `${maxZoomWidth}px`;
      imageModal.style.maxHeight = `${maxZoomHeight}px`;
    };
  }

  return (
    <>
      <HeaderStore onChange={(e) => setSearchTerm(e.target.value)} onClick={handleSearch} value={searchTerm} />
      <CategoryTop />
      <Header />
      <Products products={handleSearch()} onImageClick={openImageModal} />
      {selectedImage && (
        <>
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div className="image-modal">
              <img
                className=' object-cover'
                src={selectedImage}
                alt="Zoomed Image"
                onMouseEnter={() => handleImageZoom(selectedImage)}
                onMouseLeave={() => handleImageZoom(null)}
              />
              <button onClick={closeImageModal}>Cerrar</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
