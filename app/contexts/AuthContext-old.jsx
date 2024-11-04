// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Erro ao carregar o usuário:", error);
      setAuthError("Erro ao carregar o usuário.");
    }
  }, []);

  const login = (userData) => {
    try {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Erro ao salvar o usuário:", error);
      setAuthError("Erro ao realizar login.");
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      setAuthError("Erro ao deslogar.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
