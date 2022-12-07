import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserData, toggleIsLoggedIn, toggleLoader } from '../store/slice/userSessionSlice';

const SignIn = () => {
	// const { setUserData, setShowLoader, setIsLoggedIn } = useContext(UserSessionContext);
	const dispatch = useDispatch();

	const onPress = () => {
		// setShowLoader(prev => !prev);
		dispatch(toggleLoader(true));

		setTimeout(() => {
			// setUserData({
			// 	name: 'karan',
			// 	id: '12312321312',
			// 	age: 22
			// });

			dispatch(
				setUserData({
					name: 'karan',
					id: '12312321312',
					age: 22
				})
			);
			// setIsLoggedIn(true);
			dispatch(toggleIsLoggedIn(true));

			// setShowLoader(false);
			dispatch(toggleLoader(false));
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
