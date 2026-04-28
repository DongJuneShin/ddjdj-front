import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(false);

        setTimeout(() => {
            setLoading(true);

            setTimeout(() => {
                navigate("/intro");
            }, 3000);

        }, 50);
    };

    return (
        <div className="container">

            <div className={`login-box ${loading ? "loading" : ""}`}>
                <h1>DDJDJ PFO</h1>

                <input type="text" placeholder="ID" />
                <input type="password" placeholder="Password" />

                <button onClick={handleLogin}>Enter</button>

                <div className="dog">
                    <div className="body"></div>
                    <div className="ear ear-left"></div>
                    <div className="ear ear-right"></div>
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                    <div className="nose"></div>
                    <div className="tail"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;