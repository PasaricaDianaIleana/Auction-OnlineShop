import React, { useState } from 'react'
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
import { useNavigate } from "react-router-dom"
import { Form } from './LoginPage.Style'
const Login = () => {
    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    })
    const [error, setError] = useState(false);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginDetails = {
            UserName: user.UserName,
            Password: user.Password
        };
        await ApiRequestService.Users.postLogin(loginDetails)
            .then((res) => {
                localStorage.setItem('Token', res.writeToken);
                setLogin(true);
            }, (err) => {
                console.log(err);
                setError(true);
                setLogin(false)
            })
    }
    if (error) {
        return <div>Something went wrong...</div>
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const redirect = () => {
        if (login) {
            navigate('/dashboard')
        }
        else {
            console.log('Please login')
        }
    }
    return (
        <React.Fragment>
            <h2 className="mt-5 text-black" style={{ fontSize: '2rem' }}>Log In</h2>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="labelName" htmlFor="username">Username</label>
                    <input
                        type="text" name="UserName" value={user.UserName} onChange={handleChange}
                        className="form-control inputStyle" id="username" />
                </div>
                <div className="form-group" style={{ marginTop: '1rem' }} >
                    <label className="labelName" htmlFor="Password">Password</label>
                    <input type="password" name="Password" value={user.Password} onChange={handleChange}
                        className="form-control inputStyle" id="password" />
                </div>

                <button type="submit" className="btn submitBtn" onClick={redirect}>Login</button>
            </Form>

        </React.Fragment>
    )
}
export default Login;