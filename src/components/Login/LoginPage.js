import React from 'react'
import Index from '../Header/Index';
import Login from '../Login/Login';
import Register from '../Login/Register'
import bgImg from '../../Images/bgImg.webp'
const LoginPage = () => {

    return (
        <React.Fragment>
            <Index bgImg={bgImg} title="Login / Register" text="Explore" show={false} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ marginLeft: '12rem' }} >
                        <Login />
                    </div>
                    <div className="col-md-4" style={{ marginLeft: '-10rem' }} >
                        <Register />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LoginPage;