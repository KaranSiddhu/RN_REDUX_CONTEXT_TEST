import { configureStore } from '@reduxjs/toolkit';
import userSessionSlice from './slice/userSessionSlice';

export default configureStore({
	reducer: {
		userSession: userSessionSlice
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});
