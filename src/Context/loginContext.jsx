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
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setIsLoading(true);
        setError(null);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: username, password: password})
        };

        fetch('https://api.escuelajs.co/api/v1/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.statusCode == 401) {
                    setIsUserLogin(false);
                    setIsLoading(false);
                    setError(data);
                } else if(data.access_token) {
                    setIsUserLogin(true);
                    localStorage.saveItem("tokens", data);
                    setIsUserLogin(true);
                    navigate('/my-account');
                    setIsLoading(false);
                    setError(null);
                }
            }
        );
        timeRenderErrorMessage();
    }

    const getUserInfo = () => {
        setIsLoading(true);
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
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
        });
    }

    const logOut = () => {
        localStorage.saveItem('tokens', {});
        setIsUserLogin(false);
        setUser(null);
        navigate('/sign-in');
    }

    const createUser = (newUSer) => {
        setIsLoading(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...newUSer})
        };

        fetch('https://api.escuelajs.co/api/v1/users', requestOptions)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            }
        );
    }

    const timeRenderErrorMessage = () => {
        setTimeout(() => {
            setError(false);
        },5000);
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
                isLoading,
                createUser
            }}>
            {children}
        </LoginContext.Provider>
    )
 }

