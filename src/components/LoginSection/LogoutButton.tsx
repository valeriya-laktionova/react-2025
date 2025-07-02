import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../store/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await signOut(auth);  
      dispatch(logout());   
      navigate('/login');  
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return null; 

  return (
    <button onClick={handleLogout} className="logout-button">
      Log out
    </button>
  );
};

export default LogoutButton;
