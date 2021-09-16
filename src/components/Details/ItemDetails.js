import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg2.webp'
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
const ItemDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        GetProduct();

    }, [productId])
    const GetProduct = () => {
        ApiRequestService.Products.getProduct(productId).then((res) => {
            console.log(res);
            setProduct(res);
            ApiRequestService.Users.getUserById(res.userId).then((res) => {
                console.log(res)
            })
        })

    }


    return (
        <>
            <Index bgImg={bgImg} title="Item Details" show={false} />
            <h2>Now showing post {productId}</h2>
        </>
    )
}
export default ItemDetails;