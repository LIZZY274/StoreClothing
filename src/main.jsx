import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ProductProvider } from './context/ProductProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
         <ProductProvider>
          <App />
         </ProductProvider>
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  </FiltersProvider>
)
