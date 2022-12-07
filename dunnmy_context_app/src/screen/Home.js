import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { UserSessionContext } from '../context/UserSessionContext';

const Home = ({ navigation }) => {
	const { userData, setUserData } = useContext(UserSessionContext);

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
				onPress={() => setUserData(prev => ({ ...prev, name: 'karan siddhu' }))}
				title="press to change your name "
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Home;
