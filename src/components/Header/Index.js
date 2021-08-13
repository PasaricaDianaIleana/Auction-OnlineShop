import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { BgImg, ContainerBg, HeaderTitle, RegisterBtn } from "./Header.styles";

const Index = (props) => {

    return (
        <React.Fragment>
            <BgImg src={props.bgImg} alt="bgImg" className="img-fluid" />
            <ContainerBg>
                <Navbar />
                <HeaderTitle>{props.title}</HeaderTitle>
                <RegisterBtn type="btn" className="btn" >{props.text}</RegisterBtn >
            </ContainerBg>
        </React.Fragment >
    );
};

export default Index;
