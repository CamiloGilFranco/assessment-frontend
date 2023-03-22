export const POST_SUCCESS = "POST_SUCCESS";
export const POSTS_LOADING = "POSTS_LOADING";
export const POST_ERROR = "POST_ERROR";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const myStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
