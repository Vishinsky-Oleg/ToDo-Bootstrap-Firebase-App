import { createContext, useContext } from "react";
import { auth } from "../firebase";

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const value = {
        signup,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
