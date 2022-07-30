import { createSlice } from '@reduxjs/toolkit'

export const searchPanelSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    breeds:{}
  },
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
    breedNames: (state, action) => {
      state.breeds = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { searchValue, breedNames } = searchPanelSlice.actions;

export default searchPanelSlice.reducer