import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { UserSessionContext } from '../context/UserSessionContext';

const SignIn = () => {
	const { setUserData, setShowLoader, setIsLoggedIn } = useContext(UserSessionContext);

	const onPress = () => {
		setShowLoader(prev => !prev);
		
        setTimeout(() => {
			setUserData({
				name: 'karan',
				id: '12312321312',
				age: 22
			});
			setIsLoggedIn(true);
			setShowLoader(false);
		}, 2000);
	};

	return (
		<View>
			<Text>SignIn</Text>
			<Button
				onPress={onPress}
				title="Sign In"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SignIn;
