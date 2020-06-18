import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// connect redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);
