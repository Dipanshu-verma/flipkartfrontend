import {
  ADD_TO_CART,
  CART_QUANTITY_DECREASE,
  CART_QUANTITY_INCREASE,
  REMOVE_TO_CART,
} from "../actionType";

export const cartReducer = (
  state = {
    cartitems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartitems.find((elm) => elm.id === item.id);
      if (exist) {
        return {
          ...state,
          cartitems: state.cartitems.map((product) =>
            product.id === exist.id ? item : product
          ),
        };
      } else {
        return { ...state, cartitems: [...state.cartitems, item] };
      }

    case REMOVE_TO_CART:
      const upRemovedCart = state.cartitems.filter((elm) => elm.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(upRemovedCart))
      return {
        ...state,
        cartitems:upRemovedCart ,
      };

    case CART_QUANTITY_INCREASE:
      const product = state.cartitems.find(
        (product) => product.id === action.payload
      );
      
      product.quantity = product.quantity + 1;
 
      const updetedCart = state.cartitems.map((elm) =>
        elm.id === product.id ? product : elm
      );
      localStorage.setItem("cart", JSON.stringify(updetedCart));
      return {
        ...state,
        cartitems: updetedCart,
      };
      case CART_QUANTITY_DECREASE:
      const productDec = state.cartitems.find(
        (product) => product.id === action.payload
      );
      
      productDec.quantity = productDec.quantity - 1;
     
      const updetedCartDec = state.cartitems.map((elm) =>
        elm.id === productDec.id ? productDec : elm
      );
      localStorage.setItem("cart", JSON.stringify(updetedCartDec));
      return {
        ...state,
        cartitems: updetedCartDec,
      };

    default:
      return state;
  }
};
