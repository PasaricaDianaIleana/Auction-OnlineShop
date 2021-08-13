import React from 'react'
import { Form } from './LoginPage.Style'
const Register = () => {

    return (
        <React.Fragment>
            <h2 className="mt-5 text-black" style={{ fontSize: '2rem' }}>Register</h2>
            <Form>
                <div className="form-group">
                    <label className="labelName" htmlFor="username">Username</label>
                    <input type="text" className="form-control inputStyle" id="username" />
                </div>
                <div className="form-group">
                    <label className="labelName" htmlFor="email">Email</label>
                    <input type="text" className="form-control inputStyle" id="Email" />
                </div>
                <div className="form-group" style={{ marginTop: '1rem' }} >
                    <label className="labelName" htmlFor="password">Password</label>
                    <input type="text" className="form-control inputStyle" id="Password" />
                </div>
                <button type="submit" className="btn submitBtn">Register</button>
            </Form>
        </React.Fragment>
    )
}
export default Register;