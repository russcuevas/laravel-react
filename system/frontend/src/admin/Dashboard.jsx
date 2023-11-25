import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const userRole = localStorage.getItem('user_role');

            if (userRole === 'admin') {
                setAuthenticated(true);
            } else {
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
        setAuthenticated(false);

        navigate('/login');
    };

    return (
        <div>
            <div className="logout">
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="title">
                This is an admin dashboard
            </div>
        </div>
    );
}

export default AdminDashboard;
