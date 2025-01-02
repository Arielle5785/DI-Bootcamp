import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  age: 0,
  loading: false,
};

export const ageUpAsync = createAsyncThunk("age/ageUpAsync", async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 2000);
  });
}); 
// console.log(ageUpAsync);


export const ageDownAsync = createAsyncThunk("age/ageDownAsync", async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 2000);
  });
});
// console.log(ageDownAsync);

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    ageUp: (state) => {
      state.age+=1
    },
    ageDown: (state) => {
      state.age-=1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age -= action.payload;
      });
  },
});

export const { ageUp, ageDown } = ageSlice.actions;
export default ageSlice.reducer;