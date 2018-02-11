import { createStore, combineReducers, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import effects from "./effects";

let reducers = combineReducers(allReducers);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(effects);
export default store;
