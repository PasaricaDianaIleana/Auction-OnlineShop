import React from "react";
import Index from "../Header/Index";
import bgImg from "../../Images/bgImg.webp";
import ProductList from "./ProductList";
import CategoriesList from "../Categories/CategoriesList.js";
const BuyItem = () => {

    return (
        <React.Fragment>
            <Index bgImg={bgImg} title="Buy, Sell, Bid" />;
            <div className="container" style={{ height: 100 }}>
                <div className="row">
                    <div className="col-md-3">
                        <CategoriesList />
                    </div>
                    <div className="col-md-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default BuyItem;
