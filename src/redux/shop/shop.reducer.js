import ShopActionTypes from "./shop.tyles";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  erroMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        erroMessage: action.payload,
      };
    default:
      return state;
  }
};
