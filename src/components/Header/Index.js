import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { BgImg, ContainerBg, HeaderTitle, RegisterBtn } from "./Header.styles";

const Index = ({ bgImg, title, text, show }) => {

    return (
        <React.Fragment>
            <BgImg src={bgImg} alt="bgImg" className="img-fluid" />
            <ContainerBg>
                <Navbar />
                <HeaderTitle>{title}</HeaderTitle>
                {show ? <RegisterBtn type="btn" className="btn" >{text}</RegisterBtn> : ''}
            </ContainerBg>
        </React.Fragment >
    );
};

export default Index;
