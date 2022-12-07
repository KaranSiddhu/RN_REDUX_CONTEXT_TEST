import React, { createContext, useState } from 'react';

export const UserSessionContext = createContext();

const UserSessionContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({});
	const [showLoader, setShowLoader] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<UserSessionContext.Provider
			value={{
				userData,
				setUserData,
				showLoader,
				setShowLoader,
				isLoggedIn,
				setIsLoggedIn
			}}
		>
			{children}
		</UserSessionContext.Provider>
	);
};

export default UserSessionContextProvider;
