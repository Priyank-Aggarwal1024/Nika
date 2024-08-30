import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navOpen: false,
}

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setNavOpen: (state, action) => {
            console.log(action)
            state.navOpen = action.payload
        },
    }
})

export const { setNavOpen } = UISlice.actions;

export default UISlice.reducer;