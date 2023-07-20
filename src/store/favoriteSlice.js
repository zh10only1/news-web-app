import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.push(action.payload)
        },
        resetFavorite: (state) => {
            state = []
        },
        removeFavorite: (state, action) => {
            const dataObject = action.payload;
            const index = state.findIndex(fav => JSON.stringify(fav) === JSON.stringify(dataObject));
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    }
});

export const { setFavorite, resetFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;