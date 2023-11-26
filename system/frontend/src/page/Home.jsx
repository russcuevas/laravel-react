import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
        setAuthenticated(false);
        navigate('/login');
    };

    return (
        <div>
            <div className="title">
                <h1>This is a homepage</h1>
            </div>

            <div className="auth">
                {authenticated ? (
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <>
                        <a href="/login">Login</a><br />
                        <a href="/register">Registration</a><br />
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
