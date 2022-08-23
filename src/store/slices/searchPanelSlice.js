import { createSlice } from '@reduxjs/toolkit'

export const searchPanelSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    breeds: [],
    id: {}
  },
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
    breedNames: (state, action) => {
      state.breeds = action.payload;
    },
    breedId: (state, action) => {
      state.id = action.payload;
    }

  },
})

export const { searchValue, breedNames, breedId } = searchPanelSlice.actions;

export default searchPanelSlice.reducer