import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}),
});
console.log(store);
export default store;
