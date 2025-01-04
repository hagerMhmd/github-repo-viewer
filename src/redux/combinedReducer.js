import { combineReducers } from "redux";
import { authReducer } from "./modules/auth/Reducer.js";
import { reposReducer } from "./modules/repo/Reducer.js";
import { modalReducer } from "./modules/modal/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    repos: reposReducer,
    modal: modalReducer,
});

export default rootReducer;
