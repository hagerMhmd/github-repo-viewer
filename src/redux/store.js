import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./combined-reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = (middleware) => {
  if (import.meta.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
export const store = createStore(rootReducer, bindMiddleware([thunk]));

store.subscribe(() => {});
