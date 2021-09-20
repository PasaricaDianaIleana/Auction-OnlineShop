import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg2.webp'
import '../Details/item.Style.css'
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
const ItemDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState();
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
                            <p>aaa</p>
                        </div>
                        <div className="containerBorder borderSize">
                            <img src={user.imageUrl} className="userImage img-fluid rounded-circle" />
                            <p className="textName">{user.userName}</p>
                            <p className="userCredentials">Owner</p>
                            <p className="text"> {user.description || `User didn't added description`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetails;