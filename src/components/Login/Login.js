import React, { useState } from 'react'
import ApiRequestService from '../../ApiHelpers/ApiRequestService'
import { Form } from './LoginPage.Style'
const Login = () => {
    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginDetails = {
            UserName: user.UserName,
            Password: user.Password
        };
        ApiRequestService.Users.postLogin(loginDetails)
            .then((res) => {
                localStorage.setItem('Token', res.writeToken);
            }, (err) => {
                console.log(err)
            })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
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
                    <label className="labelName" htmlFor="password">Password</label>
                    <input type="password" name="Password" value={user.Password} onChange={handleChange}
                        className="form-control inputStyle" id="Password" />
                </div>
                <button type="submit" className="btn submitBtn">Login</button>
            </Form>

        </React.Fragment>
    )
}
export default Login;