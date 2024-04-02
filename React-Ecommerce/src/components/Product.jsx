import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {product && product.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card my-5 py-4 d-flex flex-column justify-content-between" style={{ width: "18rem", minHeight: "500px" }}>
                                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: "200px", objectFit: "contain" }} />
                                <div className="card-body text-center" style={{ height: "150px" }}>
                                    <div>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="lead">${item.price}</p>
                                    </div>
                                    <NavLink to={{ pathname: `/products/${item.id}`, state: { product: item } }} className="btn btn-outline-primary mt-auto">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product;