import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRouters({ children, allowedRoles }) {
  const { state } = useLocation();
  const user = state?.user;

  // Verifica si el usuario ha iniciado sesión y tiene el rol permitido
  const isAuthorized = user && allowedRoles.includes(user.rol);

  return isAuthorized ? children : <Navigate to="/login" />;
}
