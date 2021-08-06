import emptyCart from "../../assets/empty-cart.png";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, total }) =>
  cartItems.length ? (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="last-child">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>{total}&#8377;</span>
      </div>
      <StripeCheckoutButton price={total} />
      <div className="test-warning">
        *Please user the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 CVV: 123
      </div>
    </div>
  ) : (
    <div className="empty-cart">
      <img src={emptyCart} alt="Your cart is empty" />
    </div>
  );

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
