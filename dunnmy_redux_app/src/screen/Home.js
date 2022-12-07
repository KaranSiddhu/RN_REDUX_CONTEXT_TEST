import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/slice/userSessionSlice';

const Home = ({ navigation }) => {
	// const { userData, setUserData } = useContext(UserSessionContext);
	const { userData } = useSelector(state => state.userSession);
	const dispatch = useDispatch();

	return (
		<View>
			<Text>This is Home {userData.name}</Text>
			<Button
				onPress={() => navigation.navigate('Profile')}
				title="Go profile page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<Button
				onPress={() => {
					// setUserData(prev => ({ ...prev, name: 'karan siddhu' }))
					dispatch(setUserData({ ...userData, name: 'KARAN SIDDHU' }));
				}}
				title="press to change your name "
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Home;
