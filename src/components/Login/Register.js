import React, { useState } from 'react'
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
import { Form } from './LoginPage.Style'
const Register = () => {
    const [user, setUser] = useState({
        Username: "",
        Email: "",
        Password: ""
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            Username: user.Username,
            Email: user.Email,
            Password: user.Password
        }
        ApiRequestService.Users.postRegister(values)
            .then((res) => {
                console.log(res)
            })
    }
    return (
        <React.Fragment>
            <h2 className="mt-5 text-black" style={{ fontSize: '2rem' }}>Register</h2>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="labelName" htmlFor="Username">Username</label>
                    <input type="text" className="form-control inputStyle"
                        id="Username" name="Username" onChange={handleChange} value={user.Username} />
                </div>
                <div className="form-group">
                    <label className="labelName" htmlFor="Email">Email</label>
                    <input type="text" value={user.Email}
                        onChange={handleChange} name="Email"
                        className="form-control inputStyle" id="Email" />
                </div>
                <div className="form-group" style={{ marginTop: '1rem' }} >
                    <label className="labelName" htmlFor="Password">Password</label>
                    <input type="password" value={user.Password} name="Password"
                        onChange={handleChange}
                        className="form-control inputStyle" id="Password" />
                </div>
                <button type="submit" className="btn submitBtn">Register</button>
            </Form>
        </React.Fragment>
    )
}
export default Register;