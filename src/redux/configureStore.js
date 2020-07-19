import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from "./dish"
import{Promotions} from "./promotions"
import {Comments} from "./comments"
import {Leaders} from "./leaders"
import thunk from "redux-thunk";
import logger from "redux-logger";
import {InitialFeedback} from "./forms";
import {createForms} from "react-redux-form"
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes :Dishes,
            promotions : Promotions,
            comments : Comments,
            leaders :Leaders,
            ...createForms({
                feedback : InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
     );
    return store;
}