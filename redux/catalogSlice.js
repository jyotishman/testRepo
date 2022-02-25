import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    saveCatalogData(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveCatalogData} = catalogSlice.actions;

export default catalogSlice.reducer;
