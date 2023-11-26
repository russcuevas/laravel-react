import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const userRole = localStorage.getItem('user_role');

            if (userRole !== 'admin') {
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
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
