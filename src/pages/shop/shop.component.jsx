import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  // Don't move fetch method in lifecycle methods

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
