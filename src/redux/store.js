import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { addToListReducer } from "./reducers,/addItemToListReducer";
import { setSearchReducer } from "./reducers,/setSearchReducer";

export const rootReducer = combineReducers({
    addToListReducer: addToListReducer, // Add item to list.
    setSearchReducer: setSearchReducer // Save search data.
});

const middleWare = []

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleWare))
)