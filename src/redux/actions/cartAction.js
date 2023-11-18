import { ADD_TO_CART, CART_QUANTITY_DECREASE, CART_QUANTITY_INCREASE, REMOVE_TO_CART } from "../actionType";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { ...product},
  });
};

export const removeToCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });
};

export const increaseQuantity = (id) => (dispatch) => {
    dispatch({
      type: CART_QUANTITY_INCREASE,
      payload: id,
    });
  };

  export const decreaseQuantity = (id) => (dispatch) => {
    dispatch({
      type: CART_QUANTITY_DECREASE,
      payload: id,
    });
  };
