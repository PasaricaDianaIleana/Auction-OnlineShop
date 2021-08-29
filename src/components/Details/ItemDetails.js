import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const ItemDetails = () => {
    const { productId } = useParams();
    console.log(useParams())

    console.log(useLocation())
    return (
        <>
            <p>Item DetailsComponent</p>
            <h2>Now showing post {productId}</h2>
        </>
    )
}
export default ItemDetails;