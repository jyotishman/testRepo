import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import catalogReducer from './catalogSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    cartReducer,
    catalogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
      logger,
    ),
});
export default store;
