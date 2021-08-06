import React from "react";
import { connect } from "react-redux";

import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
