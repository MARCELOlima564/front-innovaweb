import React, { useContext } from 'react';
import { AuthContext } from '@/app/contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { adm, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h2>Bem-vindo, {adm?.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
