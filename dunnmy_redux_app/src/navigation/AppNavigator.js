import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import UnknownUserStack from './UnknownUserStack';
import { useSelector } from 'react-redux';

const AppNavigator = () => {
	// const { isLoggedIn } = useContext(UserSessionContext);
	const { isLoggedIn } = useSelector(state => state.userSession);

	return <NavigationContainer>{isLoggedIn ? <UserStack /> : <UnknownUserStack />}</NavigationContainer>;
};

export default AppNavigator;
