import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";

import { GlobalStyle } from "./global.styles";
import CheckOutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(App);
