import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

 export const LoginContext = createContext();

 export const LoginContextProvider = ({children}) => {

    const navigate = useNavigate();
    const localStorage = useLocalStorage();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: username, password: password})
        };

        fetch('https://api.escuelajs.co/api/v1/auth/login', requestOptions)
            .then(response => response.json()
            .then(data => {
                setIsUserLogin(true);
                localStorage.saveItem("tokens", data);
                if(data.statusCode == 401) {
                    setIsUserLogin(false);
                } else if(data.access_token) {
                    setIsUserLogin(true);
                    navigate('/my-account');
                }
            }
        ));
    }

    const getUserInfo = () => {
        const token = localStorage.getItem("tokens").access_token;
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
        };

        fetch('https://api.escuelajs.co/api/v1/auth/profile', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.statusCode == 401) {
                navigate('/sign-in');
                setIsUserLogin(false);
                setError(data.message);
            }else {
                setUser(data);
                setIsUserLogin(true);
            }
        })
        .catch((err) => {
            setError(err);
        });
    }

    const logOut = () => {
        return "logout";
    }
        
    return (
        <LoginContext.Provider value={
            {
                user,
                setUsername,
                setPassword,
                login,
                logOut,
                isUserLogin,
                getUserInfo,
                error,
            }}>
            {children}
        </LoginContext.Provider>
    )
 }

