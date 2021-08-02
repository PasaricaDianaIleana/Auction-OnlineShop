import React from "react";
import { useEffect, useState } from "react";
import Index from "../Header/Index";
import ApiRequestService from "../../ApiHelpers/ApiRequestService";
import bgImg from "../../Images/bgImg.webp";
import { Card, UL, LI, CardTitle } from '../Products/BuyItem.Style'
const BuyItem = () => {
    const [item, setData] = useState([]);
    useEffect(() => {
        ApiRequestService.Categories.all().then(
            (res) => {
                setData(res)
            });
    }, []);
    return (
        <React.Fragment>
            <Index bgImg={bgImg} title="Buy, Sell, Bid" />;
            <div className="container" style={{ height: 100 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Card className="card">
                            <div className="card-body">
                                <CardTitle className="card-title">Categories</CardTitle>
                                <UL>

                                    {item.map((c) => (
                                        <LI key={c.categoryId}>
                                            <li>{c.name}</li>
                                        </LI>
                                    ))}

                                </UL>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default BuyItem;
