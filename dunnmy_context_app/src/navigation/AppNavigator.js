import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import UnknownUserStack from './UnknownUserStack';
import { UserSessionContext } from '../context/UserSessionContext';
import CustomLoader from '../components/Loader';

const AppNavigator = () => {
	const { isLoggedIn } = useContext(UserSessionContext);

	return <NavigationContainer>{isLoggedIn ? <UserStack /> : <UnknownUserStack />}</NavigationContainer>;
};

export default AppNavigator;
