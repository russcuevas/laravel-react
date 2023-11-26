import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from './modal/ForgotPassword';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userRole = localStorage.getItem('user_role');

            if (userRole === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/home');
            }
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            console.log('API Response:', response.data);

            const token = response.data.token;
            console.log('Token:', token);

            if (token) {
                const userRole = response.data.user_role;
                console.log('User Role:', userRole);

                localStorage.setItem('token', token);
                localStorage.setItem('user_role', userRole);

                switch (userRole) {
                    case 'admin':
                        console.log('Redirecting to /admin/dashboard');
                        navigate('/admin/dashboard');
                        break;
                    case 'customers':
                        console.log('Redirecting to /home');
                        navigate('/home');
                        break;
                    default:
                        console.log('Unexpected user role');
                        setError('Invalid credentials, please try again.');
                }
            } else {
                console.log('Login unsuccessful');
                setError('Invalid credentials, please try again.');
            }
        } catch (error) {
            console.error('API Error:', error);
            setError('Invalid credentials, please try again.');
        }
    };

    const handleForgotPassword = () => {
        setShowModal(true);
    };

    return (
        <main>
            <div className="title">
                <h1>Login page</h1>
            </div>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                    <button type="submit">Login</button><br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <a href="#" onClick={handleForgotPassword}>Click here to forgot your password</a><br />
                    <a href="/register">Click here if you dont have an account</a>
                </form>
            </div>
            <ForgotPasswordModal isOpen={showModal} onClose={() => setShowModal(false)}></ForgotPasswordModal>
        </main>
    );
}

export default Login;
