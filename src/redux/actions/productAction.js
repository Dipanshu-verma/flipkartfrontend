import axios from "axios";
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
let URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_DETAIL_REQUEST,
    });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: error.message,
    });
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
    dispatch({
        type:GET_PRODUCTS_BY_CATEGORY_REQUEST

    })
  try {
    const { data } = await axios.get(
      `${URL}/products/category/?category=${category}`
    );
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_FAIL,
      payload: error.message,
    });
  }
};

export const sortHeaderProducts =
  (type, order, category) => async (dispatch) => {
    
    dispatch({
        type:GET_PRODUCTS_BY_CATEGORY_REQUEST
    })
    try {
      const { data } = await axios.get(
        `${URL}/products/headerproducts?_sort=${type}&_order=${order}&category=${category}`
      );

      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_FAIL,
        payload: error.message,
      });
    }
  };

export const filterbyratingHeaderProducts = (category) => async (dispatch) => {
    dispatch({
        type:GET_PRODUCTS_BY_CATEGORY_REQUEST
    })
  try {
    const { data } = await axios.get(
      `${URL}/products/headerproductsfilter?category=${category}&rating=4`
    );

    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_FAIL,
      payload: error.message,
    });
  }
};
