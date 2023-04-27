import React from "react";
import "./Cart.css";
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import ShopingItems from "../ShopingItems/ShopingItems";
const Cart = () => {
  return (
    <div className="cart-parent-div">
      <div className="cart-page-left-items">
        <hr />
        <ShopingItems />
        <hr />
      </div>

      <div className="cart-page-calculations">
        <div className="cart-page-address-div">
          <div>
            <GoLocation className="cart-page-address-logo" />
          </div>
          <div>
            <p className="cart-page-address-para">
              Chatiya Auliya, Sonipat-131001, Haryana
            </p>
            <p className="cart-page-address-modify">Modify</p>
          </div>
        </div>
        <hr />

        <div className="cart-page-delivery-div">
          <div>
            <FiClock  className="cart-page-delivery-logo" />
          </div>
          <div>
            <p className="cart-page-estimated-delivery">Estimated Delivery</p>

            <p className="cart-page-estimated-delivery-time">Within 5-7 days</p>
          </div>
        </div>
        <hr />

        <div className="cart-total-price-div">
          <div>Total Price</div>
          <div>₹1239</div>
        </div>

        <div className="cart-checkout-btn-div">
          <button className="cart-checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
