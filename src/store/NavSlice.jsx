import { createSlice } from '@reduxjs/toolkit';

export const NavSlice = createSlice({
    name: 'nav',
    initialState: {
        currentPage: 'home',
        isHome: true,
        isPlants: false,
    },
    reducers: {
        goToHome: (state) => {
            state.currentPage = 'home';
            state.isHome = true;
            state.isPlants = false;
        },
        goToPlants: (state) => {
            state.currentPage = 'plants';
            state.isHome = false;
            state.isPlants = true;
        },
    },

});

export const { goToHome, goToPlants } = NavSlice.actions;

export default NavSlice.reducer;
