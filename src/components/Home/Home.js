import React from 'react'
import Index from '../Header/Index'
import bgImg from '../../Images/bgImg.webp'
import { DivWrapper } from './Home.Style';
import ProductList from '../Products/ProductList'
const Home = () => {

    return (
        <React.Fragment>
            <Index bgImg={bgImg} text="Register" title="The Best Place to Buy and Sell Items" show={true} />
            <DivWrapper className="container">
                <h5 className="homeTitle">Auctions</h5>
                <p className="subTitle">
                    Current <span className="partTitle">Auctions</span>
                </p>
                <ProductList />
            </DivWrapper>

        </React.Fragment>

    )
}
export default Home;