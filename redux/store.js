import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import catalogReducer from './catalogSlice';

const store = configureStore({
  reducer: {
    cartReducer,
    catalogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}),
});
export default store;
