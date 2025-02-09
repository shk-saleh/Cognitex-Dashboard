import React, { createContext, useState, useContext, useEffect } from 'react';
import LoginPage from './LoginPage';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('userEmail') || '';
  });

  const login = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={(email) => login(email)} />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;