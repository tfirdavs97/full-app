import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const localToken = JSON.parse(localStorage.getItem("token"))
    const [token, setToken] = useState(localToken)

    useEffect(() => {
        if(token) {
           return localStorage.setItem("token", JSON.stringify(token))
        }

        localStorage.removeItem("token")
    }, [token]);
    return (
       <AuthContext.Provider value={{token, setToken}}>
           {children}
       </AuthContext.Provider>
    );
}
