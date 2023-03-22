import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { myStoreReducer } from "./reducers/myStore.reducer";

const rootReducer = combineReducers({ myStoreReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
