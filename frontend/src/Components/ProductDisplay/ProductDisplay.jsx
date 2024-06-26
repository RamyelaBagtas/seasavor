import React, { useCallback, useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star.png";
import star_dull_icon from "../Assets/star_dull.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    console.log("product",product._id);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    maalaaaaattttttjtyjfthrduygjjesdbfc  eejdsfbckuajgbfjkasgbfjgasjkdbcas cfcfakdhgjbuajkwgbfa
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                    <div>Small</div>
                    <div>Large</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product._id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Dried Fish, Tuyo</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Newest</p>
        </div>
    </div>
  )
}

export default ProductDisplay