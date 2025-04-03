import { createSlice } from "@reduxjs/toolkit";

const initialState={
  movieDetail: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers:{
    setmovieDetail: (state,action)=>{
      state.movieDetail = action.payload
    },
  },
});


export const {setmovieDetail} = movieSlice.actions;
export default movieSlice.reducer;
