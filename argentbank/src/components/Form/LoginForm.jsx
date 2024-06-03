import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as loginAction from '../../features/login.js';
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function SubmitLoginForm(event) {
        event.preventDefault();
        const submitLog = {
            email: username,
            password: password,
        };
        const chargeUtile = JSON.stringify(submitLog);

        await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: chargeUtile,
        })
            .then((resp) => resp.json())
            .then((response) => {
                if (response.status === 200) {
                    dispatch(loginAction.set(true));
                    navigate('/user');
                } else {
                    console.log('error');
                }
            });
    }

    return (
        <form onSubmit={(event) => SubmitLoginForm(event)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    );
}

export default LoginForm;
