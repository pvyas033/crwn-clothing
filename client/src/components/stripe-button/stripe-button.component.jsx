import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { clearCart } from "../../redux/cart/cart.actions";

import axios from "axios";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1PIxSFNiIxtGbM6GAncK9M3OyMKyYQt7iSs2My1oZ2qD1qWrToJDNgYZOoGVs88L0EGzMmxrfzyMMitJnHFSxx00OyBdSIIk";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card"
        );
        console.log("Payment error: ", JSON.parse(error));
      });
    clearCart();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Door Store Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}₹`}
      amount={priceForStripe}
      token={onToken}
      allowRememberMe
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
