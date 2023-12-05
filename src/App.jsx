// import Cart from './components/Cart.jsx';
// import Home from './pages/Home.jsx';
// import { Route, Routes } from 'react-router-dom';
// import { CartProvider } from './context/cart.jsx';
// import LoginForm from './components/LoginForm.jsx';

import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/cart"
import AppRouter from "./router/AppRouter"


function App() {


  return (

    <>
      <AuthProvider>
        <CartProvider>
          <AppRouter/>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App