import React, { useState, useEffect } from 'react'
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg.webp'
const Dashboard = () => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://localhost:44300/api/User/Profile", {
            method: 'GET',
            headers:
                new Headers({
                    'Authorization': checkToken(),
                    "Content-Type": "application/json"
                })
        }).then(
            res => {
                return res.json();
            })
            .then((data) => {
                setProfile(data);
                console.log(profile)
            })
    }, [profile]);
    const checkToken = () => {
        if (localStorage.getItem("Token") == null) {
            console.log("No token is available")

        } else {
            const token = 'Bearer ' + localStorage.getItem("Token");
            return token;
        }
    }
    return (
        <>
            <Index bgImg={bgImg} title="User Page" show={false} />
            <p>User Dashboard</p>
        </>

    )
}

export default Dashboard;