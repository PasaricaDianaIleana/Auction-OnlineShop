import React, { useState, useEffect } from 'react';
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
import "../../Styles/GlobalStyle.css";
import { Link } from 'react-router-dom';
import { CardWrapper } from './Products.styles'
const ProductList = () => {

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const fetchProducts = () => {
        ApiRequestService.Products.all().then(
            (res) => {
                console.log(res);
                setProduct(res);
                setError(false)
            },
            (err) => {
                setError(true)
            }
        )
    }
    if (error) {
        <p>Something went wrong</p>
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <React.Fragment>
            <div className="row">
                {product.map((item) => {
                    const { categoryId, createdDate, productId, price, name, imageUrl, inProcess, categoryName, bidNr } = item;
                    return (
                        <div className="col-md-3" key={productId} >
                            <CardWrapper className="card">
                                <span className="price">${price}</span>
                                <div div className="card-img-top" >
                                    <img src={imageUrl} alt={name} className="img-fluid productImage" />
                                </div>
                                <p className="productName">{name}</p>
                                <div className='d-flex'>
                                    <span className="text">{categoryName}</span>
                                    <span className="text" style={{ marginLeft: '6rem' }}>{bidNr.length > 0 || 'No bids'}</span>
                                </div>
                                <Link to={`/item/${productId}`} >
                                    <button type="button" className="submit">Submit a Bid</button>
                                </Link>
                            </CardWrapper>
                        </div >
                    )
                })}
            </div >
        </React.Fragment >
    )
}
export default ProductList;