// import { createStore, applyMiddleware, combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers/rootreducer';




const saveState = (state:any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

export type AppState = ReturnType<typeof rootReducer>;

export default function setupStore() {
  // const middlewares = [thunkMiddleware];
  // const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = configureStore({
    reducer:rootReducer
  });
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}


