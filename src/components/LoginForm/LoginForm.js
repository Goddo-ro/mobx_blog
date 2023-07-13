import React, {useState} from 'react';
import "./LoginForm.css";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import AccessControl from "../../store/AccessControl";
import {observer} from "mobx-react-lite";
import {Navigate} from "react-router-dom";

const LoginForm = observer(() => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password)
            return;

        AccessControl.login(username);

        return <Navigate replace to="/posts"/>;
    }

    return (
        <form onSubmit={handleSubmit} className="single-form">
            <h2>Login</h2>
            <MyInput type="text" placeholder="Username..." value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <MyInput type={showPassword ? "text" : "password"} placeholder="Password..." value={password}
                     onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-checkbox-container">
                <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(old => !old)} />
                Show password
            </div>
            <MyButton text="Sign In"/>
        </form>
    );
});

export default LoginForm;