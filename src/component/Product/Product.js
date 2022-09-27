import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { addToCart, product } = props
    const { name, img, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price} </p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings} Stars</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;