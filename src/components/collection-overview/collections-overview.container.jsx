import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
