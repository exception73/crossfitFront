import React from 'react'
import './SingleProduct.css'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  return (
    <div className='single-product-page'>
        <div className='single-product-img-parent'>
        <img className='single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
        </div>

        <div className='single-product-desc'>
            <p className='single-product-fitmart-heading'>FITMART</p>
            <p className='product-name'>CrossFit Logo Running T-Shirt</p>
            <div className='product-price-parent'>
            <p className='product-discounted-price'>₹1199</p>
            <p className='product-original-price'><s>₹1599</s></p>
            <p className='product-discount-value'>25% OFF</p>
            </div>
            <p className='product-desc'>Amp your fitness wardrobe with this Graphic Print crew neck workout t-shirt. With fabric that lets you breathe without restrictions, this t-shirt keeps up with your active life!</p>
            <p className='product-choose-size'>Choose Size:</p>
            <div className='product-size-button-parent'>
                <button className='product-size-button'>S</button>
                <button className='product-size-button'>M</button>
                <button className='product-size-button'>L</button>
                <button className='product-size-button'>L</button>
                <button className='product-size-button'>XL</button>
                <button className='product-size-button'>XXL</button>
            </div>
            <div className='product-add-view-cart-parent'>
               <Link to='/cart'> <button className='product-add-to-cart-button'>Add to Cart</button></Link>
                <button className='product-view-cart-button'>View Cart(1)</button>
            </div>
            <p className='product-details'> Product Details</p>
            <ul className='product-details-ul'>
                <li className='product-details-li'>Color:Grey</li>
                <li className='product-details-li'>Fabric: 100% Polyester</li>
                <li className='product-details-li'>Glydry : sweat-wicking tech to keep your workouts dry</li>
                <li className='product-details-li'>Breathable Fabric</li>
            </ul>
            
            <hr />
    

           
            <ul>
                <li className='product-details-li'>Free delivery within 5-7 days</li>
                <li className='product-details-li'>Easy 30 days return available</li>
                <li className='product-details-li'>30 days exchange available</li>
                <li className='pay-on-delivery'>Pay on Delivery is not available</li>
            </ul>

            <hr />
            <br />

            <p >Fabric</p>
            <ul>
                <li className='product-fabric'>100% Polyster</li>
            </ul>

        </div>
    </div>
  )
}

export default SingleProduct