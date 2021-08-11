import React from "react";
import { useEffect, useState } from "react";
import ApiRequestService from "../../ApiHelpers/ApiRequestService";
import { Card } from '../Categories/CategoriesStyle'


function CategoriesList() {

    const [item, setData] = useState([]);
    useEffect(() => {
        ApiRequestService.Categories.all().then(
            (res) => {
                setData(res)
            });
    }, []);
    return (
        <React.Fragment>

            <Card className="card">
                <div className="card-body">
                    <h3 className="card-title title">Categories</h3>
                    <ul className="list" >

                        {item.map((c) => (

                            <li className="li" key={c.categoryId}>{c.name} </li>


                        ))}

                    </ul>
                </div>
            </Card>

        </React.Fragment>
    )
};
export default CategoriesList;
