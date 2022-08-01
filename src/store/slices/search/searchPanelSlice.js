import { createSlice } from '@reduxjs/toolkit'

export const searchPanelSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    breeds:{},
    favourites:{}
  },
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
    breedNames: (state, action) => {
      state.breeds = action.payload;
    },
    myFavourites: (state, action) =>{
      state.favourites = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { searchValue, breedNames, myFavourites } = searchPanelSlice.actions;

export default searchPanelSlice.reducer