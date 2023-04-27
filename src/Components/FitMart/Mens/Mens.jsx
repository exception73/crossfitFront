import React from 'react'
import './Mens.css'
import { Link } from 'react-router-dom'

const Mens = () => {
  return (
    <div className='store-category'>

        <div className='category-heading-name'>Mens</div>
        <div className='category-single-product'>
            <Link to='/single-product'>
            <div className='product-all-desc' >
            <img className='category-single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
            <p className='single-product-name'>best shirt for running</p>
            <p className='single-product-price'>1199</p>
            </div>
            </Link>

            <div className='product-all-desc' >
            <img className='category-single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
            <p className='single-product-name'>best shirt for running</p>
            <p className='single-product-price'>1199</p>
            </div>

            <div className='product-all-desc' >
            <img className='category-single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
            <p className='single-product-name'>best shirt for running</p>
            <p className='single-product-price'>1199</p>
            </div>
            <div className='product-all-desc' >
            <img className='category-single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
            <p className='single-product-name'>best shirt for running</p>
            <p className='single-product-price'>1199</p>
            </div>
            <div className='product-all-desc' >
            <img className='category-single-product-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/GDmAFq6WZLD9omKo6TuMGyZp" alt="" />
            <p className='single-product-name'>best shirt for running</p>
            <p className='single-product-price'>1199</p>
            </div>
        </div>

    </div>
  )
}

export default Mens