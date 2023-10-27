import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const storedAuthData = JSON.parse(localStorage.getItem('auth')) || {
        user: null,
        token: ""
    };

    const [auth, setAuth] = useState(storedAuthData);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
