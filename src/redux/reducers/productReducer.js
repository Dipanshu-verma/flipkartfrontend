import {
  GET_PRODUCTS_BY_CATEGORY_FAIL,
  GET_PRODUCTS_BY_CATEGORY_REQUEST,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../actionType";

const intialState = {
  products: [],
  error: null,
};

export const getProductReducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload, error: null };
    case GET_PRODUCTS_FAIL:
      return { ...state, error: payload, products: [] };

    default:
      return state;
  }
};
export const getCategoryReducer = (
  state = {
    categoryProducts: [],
    error: null,
    loading:false
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, categoryProducts: payload,loading:false };
    case GET_PRODUCTS_BY_CATEGORY_FAIL:
      return { ...state, error: payload,loading:false };
      case GET_PRODUCTS_BY_CATEGORY_REQUEST:return{ ...state, loading:true,categoryProducts:[] }
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: {}, error: null, loading: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: payload,
      };
    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        product: {},
      };
    default:
      return state;
  }
};
