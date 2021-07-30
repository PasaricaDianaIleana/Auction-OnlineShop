import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { BgImg, ContainerBg, HeaderTitle, RegisterBtn } from "./Header.styles";

const Index = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <React.Fragment>
            <BgImg src={props.bgImg} alt="bgImg" className="img-fluid" />
            <ContainerBg>
                <Navbar />
                <HeaderTitle>{props.title}</HeaderTitle>
                <RegisterBtn type="btn" className="btn" >Register</RegisterBtn >
            </ContainerBg>
        </React.Fragment >
    );
};

export default Index;
