import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "./../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
