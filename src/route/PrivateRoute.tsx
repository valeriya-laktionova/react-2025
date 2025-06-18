import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => !!state.auth.user);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
