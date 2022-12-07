import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import CustomLoader from './src/components/Loader';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/store';

export default function AppWrap() {
	return (
		<Provider store={store}>
			{console.log('APP.JS FILE - ')}
			<App />
		</Provider>
	);
}

function App() {
	const { showLoader } = useSelector(state => state.userSession);

	return (
		<>
			<AppNavigator />
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
