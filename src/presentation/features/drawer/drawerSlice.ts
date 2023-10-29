import { createSlice } from "@reduxjs/toolkit";
import { DrawerState } from "./drawerSlice.types";

const initialState: DrawerState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
