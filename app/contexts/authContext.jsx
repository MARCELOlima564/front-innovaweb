'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Começa como true para verificar o token
    const [error, setError] = useState(null);

    // Verifica se há um token salvo ao carregar a página
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    // Aqui você faria uma chamada à API para validar o token
                    const response = await api.post('/auth/login', {
                       email,
                       senha,
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        setUser(userData);
                    } else {
                        localStorage.removeItem('authToken');
                    }
                } catch (err) {
                    console.error('Erro ao verificar token:', err);
                    localStorage.removeItem('authToken');
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, senha
    ) => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.post('/auth/login', {
                email,
                senha,
            });

            

            const userData = await response.data;
            setUser(userData);
            localStorage.setItem('authToken', userData.token);

            // Redireciona para a rota pretendida ou dashboard
            // const intendedRoute = sessionStorage.getItem('intendedRoute');
            // if (intendedRoute) {
            //     sessionStorage.removeItem('intendedRoute');
            //     window.location.href = intendedRoute;
            // }

            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
        window.location.href = '/login';
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};