import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {

    const { slug } = useParams();

    return (
        <p>Item DetailsComponent</p>
    )
}
export default ItemDetails;