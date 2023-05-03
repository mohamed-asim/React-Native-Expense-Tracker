//   //Combine reducers used to combine reducers from all over and pass to store
//   const combinedReducers = combineReducers({
//     entries: entriesReducer,
//   });

//   //Redux Inital setups
//   const store = createStore(combinedReducers);

import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    applyMiddleware(...middlewares)
  );
  // initSagas(sagaMiddleware);
  return store;
};
export default configureStore;
