import styled from "styled-components";

export const ContainerBg = styled.div`
  min-width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const BgImg = styled.img`
  height: 110vh;
  width: 100%;
  margin-top: -4.7rem;
`;
export const HeaderTitle = styled.h1`
  text-align: center;
  color: white;
  margin-top: 12rem;
  font-weight: 900;
  font-size: 3rem;
  margin-left: 1rem;
`;
export const RegisterBtn = styled.button`
  margin:0 auto;
  margin-top: 2rem;
  background-color: rgb(243, 113, 33);
  width:7%;
  color:white;
  border-radius:0;
  height:7vh;
  display:block;
  
  @media screen and (max-width:500px){
    width:20%;
  }
`;
