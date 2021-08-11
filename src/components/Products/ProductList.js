import React, { useState, useEffect } from 'react';
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
import "../../Styles/GlobalStyle.css"
const ProductList = () => {


    const [product, setProduct] = useState([]);

    const fetchProducts = () => {
        ApiRequestService.Products.all().then(
            (res) => {
                console.log(res);
                setProduct(res);
            },
            (err) => {
                console.log(err)
            }
        )
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <React.Fragment>
            <div className="row">
                {product.map((item) => {
                    const { categoryId, createdDate, productId, price, name, imageUrl, inProcess } = item;
                    return (
                        <div className="col-md-3 position" key={productId} >
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={imageUrl} alt={name} className=" w-100" />
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

        </React.Fragment>
    )
}
export default ProductList;