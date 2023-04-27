import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './cartHeading.css'

const CartHeading = ({heading}) => {
  
  return (
    <div className='cart-page-heading-div'> 
    <FaShoppingCart className='cart-page-heading-icon' />
    <p className='cart-page-heading-para'>{heading}</p>
  
</div>
  )
}

export default CartHeading