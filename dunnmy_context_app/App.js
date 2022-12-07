import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import UserSessionContextProvider, { UserSessionContext } from './src/context/UserSessionContext';
import CustomLoader from './src/components/Loader';
import { useContext } from 'react';

export default function AppWrap() {
	return (
		<UserSessionContextProvider>
			<App />
		</UserSessionContextProvider>
	);
}

function App() {
	const { showLoader } = useContext(UserSessionContext);

	return (
		<>
			<AppNavigator />
      {console.log('APP.JS FILE')}
			{showLoader && <CustomLoader />}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
