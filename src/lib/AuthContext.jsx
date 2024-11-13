import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext();

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
    const [ token, setToken ] = useState(null);
    const [ username, setUsername ] = useState(null);
    const [ userid, setUserid ] = useState(null);

    const login = (newToken, newUsername, newUserId) => {
        setToken(newToken)
        setUsername(newUsername)
        setUserid(newUserId)
    };

    const logout = () => {
        setToken(null)
    };

    return (
        <AuthContext.Provider value={{ token, username, userid, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}
