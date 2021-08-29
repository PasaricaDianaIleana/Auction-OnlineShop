import styled from "styled-components";

export const CardWrapper = styled.div`
width:36vh;
left:4.5rem;
position: relative;
border:0.5px solid #f8f9fa;

.productImage{
    margin-bottom: 1.5rem;
 height: 25vh;
margin-left: auto;
	margin-right: auto;
    margin-top:3rem;
	display: block;
}
.price{
    background-color: #f37121;
    border-radius: 50%;
    position: absolute;
    display: inline-block;
    width:90px;
    height: 90px;
    margin-top: 1rem;
    text-align: center;
    line-height: 90px;
    color:#fff;
    font-weight: 700;
    font-size: 1.2rem;
}
.productName{
    font-weight:700;
    font-size: 1.3rem;
}
.text{
    color:#999;
    font-size:15px;
    font-weight: 300;
}
.submit{
    border:none;
    margin-top: 1rem;
    background-color: #f8f9fa;
    color:black;
    cursor: pointer;
    padding: 7px 15px;
    width: 55%;
      font-size: 1rem;
      position: absolute;
      top:100%;
      left:10%;
     
}
`