import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showLoader: false,
	userData: {},
	isLoggedIn: false
};
console.log('INSIDE USER SESSION SLICE');
export const userSessionSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload;
		},

		toggleLoader: (state, action) => {
			state.showLoader = action.payload;
		},

		toggleIsLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		}
	}
});

export const { toggleLoader, setUserData, toggleIsLoggedIn } = userSessionSlice.actions;

export default userSessionSlice.reducer;
