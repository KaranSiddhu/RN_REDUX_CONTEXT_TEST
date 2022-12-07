import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import SignIn from '../screen/SignIn';

const Stack = createStackNavigator();

export default function UnknownUserStack() {

	return (
		<Stack.Navigator>
			<Stack.Screen name="SignIn" component={SignIn} />
		</Stack.Navigator>
	);
}
