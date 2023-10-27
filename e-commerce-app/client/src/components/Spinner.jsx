import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate('/login', {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location]);
    return (
        <>
            <div class="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h1 className="Text-center">redirecting you in {count} second... </h1>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner;