import axios from "axios";
import { useState } from "react";

const useAuthService = () => {
    const [error, setError] = useState(null);

    const postLogin = async (email, password) => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            });
    
            if (res.data.status === true && res.data.user.role === 0) {
                const user = res.data.user;
                const accessToken = res.data.authorization.access_token;
                console.log("This is access token", accessToken);
                let data = {
                    isAuthenticated: true,
                    token: accessToken
                }
                sessionStorage.setItem('account', JSON.stringify(data));
                return user; // Return true when login is successful
            } else {
                return false; // Return false if login fails
            }
        } catch (err) {
            console.error('Error during login:', err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message); // Set error message from API response
            } else {
                setError('An error occurred during login'); // Set a generic error message if response format is unexpected
            }
            return false; // Return false if an error occurs
        }
    };

    const getLogout = async () => {
        try {
            const token = JSON.parse(sessionStorage.getItem('account')).token;
            const res = await axios.get('http://127.0.0.1:8000/api/logout', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.data.status === true) {
                sessionStorage.removeItem('account');
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error('Error during logout:', err);
            return false;
        }
    };

    return { postLogin, getLogout, error };
};

export default useAuthService;
