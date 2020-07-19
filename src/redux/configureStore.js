import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from "./dish"
import{Promotions} from "./promotions"
import {Comments} from "./comments"
import {Leaders} from "./leaders"
import thunk from "redux-thunk";
import logger from "redux-logger";
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes :Dishes,
            promotions : Promotions,
            comments : Comments,
            leaders :Leaders
        }),
        applyMiddleware(thunk,logger)
     );
    return store;
}