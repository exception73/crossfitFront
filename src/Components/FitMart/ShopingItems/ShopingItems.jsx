import React from "react";
import "./ShopingItems.css";
import {MdDelete} from 'react-icons/md'
import Footer from "../../Footer/Footer";

const ShopingItems = () => {
  return (
    <div>

<div className="shoping-items-parent-div">
      
      <div className="shoping-items-img-div">
        <img className="shoping-item-img"
          src="https://res.cloudinary.com/dycitvrpg/image/upload/v1682093767/WhatsApp_Image_2023-04-18_at_09.35.02_jxrt2l.jpg"
          alt="item-img"
        />
      </div>
      <div className="shoping-item-desc">
        <p className="shoping-item-name">Best Shirt & buttoned Skirt Set</p>
        <p className="shoping-item-color">Color:Olive/MUlti</p>
        <p className="shoping-item-size">Size:S</p>
      </div>
      {/* <div className="shoping-item-price-div">
        <p className="shoping-item-one">Each</p>
        <p className="shoping-item-one-price">₹323.23</p>
      </div> */}
      <div className="shoping-item-quantity-div">
        <p className="shoping-item-quantity-para">Quantity</p>
        <select
          name="Quantity"
          className="shoping-item-select-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="shoping-item-total-div">
        <p className="shoping-item-total-para">Total</p>
        <p className="shoping-item-total-price">₹323</p>
      </div>

      <div className="shoping-item-delete-div">
        <MdDelete className="shoping-item-delete-icon" />
      </div>
     

    </div>



       
     
    </div>
    );
};

export default ShopingItems;
