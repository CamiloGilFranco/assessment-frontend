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
        res.data.map((element) => {
          const limitTime = new Date();
          const randomMinutes = Math.floor(Math.random() * 11);
          const randomSeconds = Math.floor(Math.random() * 60);

          limitTime.setMinutes(limitTime.getMinutes() + randomMinutes);
          limitTime.setSeconds(limitTime.getSeconds() + randomSeconds);
          const limitTimeNumber = limitTime.getTime();
          element.limitTimeNumber = limitTimeNumber;
        });
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
