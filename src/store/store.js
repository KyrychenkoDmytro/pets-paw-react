import { configureStore } from '@reduxjs/toolkit';
import searchPanelReducer from './slices/search/searchPanelSlice';

export default configureStore({
  reducer: {
    search: searchPanelReducer
  },
})