import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Index from '../Header/Index';
import bgImg from '../../Images/bgImg2.webp'
import '../Details/item.Style.css'
import { Link } from 'react-router-dom';
import ApiRequestService from '../../ApiHelpers/ApiRequestService';
const ItemDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState({
        description: "",
        imageUrl: "",
        userId: ""
    });
    const [error, setError] = useState(false);
    const [data, setData] = useState({

        Price: 0
    })

    useEffect(() => {
        GetProduct();

    }, [productId])
    if (error) {
        return <div>Something went wrong...</div>
    }
    const GetProduct = async () => {
        await ApiRequestService.Products.getProduct(productId).then((res) => {
            setProduct(res);
            ApiRequestService.Users.getUserById(res.userId).then((res) => {
                console.log(res)
                setUser(res)
            })
        })

    }
    const submitForm = async (e) => {
        e.preventDefault();
        const productData = {
            UserId: user.userId,
            ProductId: productId,
            Price: data.Price
        }
        await checkUser();
        await CreateBid(productData);
        setData({
            Price: 0
        })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const CreateBid = async (data) => {
        await ApiRequestService.Bids.addBid(data).then((res) => {
            console.log(res);
        },
            (err) => {
                console.log(err);
                setError(true)
            })
    }
    const checkUser = () => {
        if (localStorage.getItem('Token')) {
            console.log("user is online")
            console.log(localStorage.getItem('Token'))
        }
        else {
            console.log('please, login')
        }
    }
    return (
        <>

            <Index bgImg={bgImg} title="Item Details" show={false} />
            <div className="container">
                <div className="row">
                    <div className="col-8 containerBorder" style={{ width: "100vh" }}>
                        <img src={product.imageUrl} alt="img" className="imgStyle img-fluid" />
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
                                    <input type="text"
                                        className="form-control-sm m-xxl-3 size" placeholder="$0.00"
                                        name="Price" value={data.Price} id="price" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-bid">Submit a Bid</button>
                                <span className="d-block text-center my-2">or</span>
                                <button type="submit" className="btn  btn-pay ">Buy Now</button>
                            </form>
                            <Link to={`/login`} className="link mt-lg-2" >Sign In/ Register </Link>
                        </div>
                        <div className="containerBorder borderSize">
                            <img src={user.imageUrl} alt="user" className="userImage img-fluid rounded-circle" />
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