import {
  POST_SUCCESS,
  POSTS_LOADING,
  POST_ERROR,
} from "../reducers/myStore.reducer";
import axios from "axios";

export const getPost = () => {
  return (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true });

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: POST_ERROR, payload: error });
      })
      .finally(() => {
        dispatch({ type: POSTS_LOADING, payload: false });
      });
  };
};
