//   //Combine reducers used to combine reducers from all over and pass to store
//   const combinedReducers = combineReducers({
//     entries: entriesReducer,
//   });

//   //Redux Inital setups
//   const store = createStore(combinedReducers);

import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    })
  );
};
export default configureStore;
