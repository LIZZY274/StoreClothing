// AppRouter.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
import LoginForm from '../components/organims/LoginForm';
import Cart from '../components/organims/Cart';
import RegisterForm from '../components/molecules/RegisterForm';
import HomeAdmin from '../pages/HomeAdmin';
import FormAddRopa from '../components/organims/FormAddRopa';
import Landing from '../components/organims/Landing';


function AppRouter() {
  return (
    <AuthProvider>
        <Routes>
          
            <Route index path="/home" element={<PrivateRoute allowedRoles={['cliente']} element={<Home />} />} />
            <Route path="/carrito" element={<PrivateRoute allowedRoles={['cliente']} element={<Cart />} />} />
            <Route index path='/home/admin' element={<PrivateRoute allowedRoles={['administrador']} element={<HomeAdmin/>} />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path='/registro' element={<RegisterForm/>} />
            <Route path='/add' element={<PrivateRoute allowedRoles={['administrador']} element={<FormAddRopa/>} />} />
            <Route path='/' element={<Landing/>} />

        </Routes>
    </AuthProvider>
  );
}

function PrivateRoute({ element, allowedRoles }) {
  const { user } = useAuth();

  // Verifica si el usuario está autenticado y si su rol coincide con los roles permitidos
  if (user && allowedRoles.includes(user.rol)) {
    return element;
  }

  // Redirige a la página de inicio de sesión si no cumple con los requisitos
  return <Navigate to="/login" replace />;
}

export default AppRouter;
