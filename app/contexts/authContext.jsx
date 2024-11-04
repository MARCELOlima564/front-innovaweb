"use client"
import axios from "axios";
import { createContext } from "react";
import { signin } from "@/api/user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [acessToken, setAcessToken] = useState(null);


    const signInContext = async (nameParams, passwordParams) => {
        setLoading(true);
        const response = await signin(nameParams, passwordParams);
        if (response) {
            setUser(response.user);
            setAcessToken(response.token);
        }
        return response;
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ signInContext, loading, user, acessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;