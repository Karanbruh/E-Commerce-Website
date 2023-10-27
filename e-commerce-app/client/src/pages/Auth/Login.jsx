import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/authStyles.css';
import { useAuth } from "../../context/auth";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginURL = 'http://localhost:8080/api/v1/auth/login';
        try {
            const res = await axios.post(loginURL, {
                email,
                password
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Log In</h4>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary d-inline-block" onClick={() => { navigate('/forgot-password') }}>
                            Forgot Password?
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-2">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Login;