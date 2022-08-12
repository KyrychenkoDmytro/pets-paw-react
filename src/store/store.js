import { configureStore } from '@reduxjs/toolkit';
import searchPanelReducer from './slices/searchPanelSlice';

export default configureStore({
  reducer: {
    search: searchPanelReducer
  },
})