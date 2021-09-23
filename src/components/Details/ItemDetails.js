import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg2.webp'
import '../Details/item.Style.css'
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
const ItemDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        GetProduct();

    }, [productId])
    const GetProduct = () => {
        ApiRequestService.Products.getProduct(productId).then((res) => {
            console.log(res);
            setProduct(res);
            ApiRequestService.Users.getUserById(res.userId).then((res) => {
                console.log(res)
                setUser(res)
            })
        })

    }
    const submitForm = () => {
        console.log("data")
    }

    return (
        <>

            <Index bgImg={bgImg} title="Item Details" show={false} />
            <div className="container">
                <div className="row">
                    <div className="col-8 containerBorder" style={{ width: "100vh" }}>
                        <img src={product.imageUrl} className="imgStyle img-fluid" />
                    </div>
                    <div className="col-4 " >
                        <div className="containerBorder borderSize">
                            <p className="textStyle mt-xxl-4 m-xxl-3">Price:
                                <span className="info"> ${product.price}</span>
                            </p>
                            <p className="textStyle m-xxl-3 mt-auto">Number of bids:
                                <span className="info"> {product.bidNr}</span>
                            </p>
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <input type="text" className="form-control-sm m-xxl-3 size" placeholder="$0.00" name="value" />
                                </div>
                                <button type="submit" className="btn btn-bid">Submit a Bid</button>
                                <span className="d-block text-center my-2">or</span>
                                <button type="submit" className="btn  btn-pay m-auto">Buy Now</button>
                            </form>
                        </div>
                        <div className="containerBorder borderSize">
                            <img src={user.imageUrl} className="userImage img-fluid rounded-circle" />
                            <p className="textName">{user.userName}</p>
                            <p className="textStyle text-center">Owner</p>
                            <p className="text"> {user.description || `User didn't added description`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetails;