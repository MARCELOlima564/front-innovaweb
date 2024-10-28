import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adm, setAdm] = useState(null);

  useEffect(() => {
    const storedAdm = localStorage.getItem('adm');
    if (storedAdm) {
      setAdm(JSON.parse(storedAdm));
    }
  }, []);

  const login = (admData) => {
    localStorage.setItem('adm', JSON.stringify(admData));
    setAdm(admData);
  };

  const logout = () => {
    localStorage.removeItem('adm');
    setAdm(null);
  };

  return (
    <AuthContext.Provider value={{ adm, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
