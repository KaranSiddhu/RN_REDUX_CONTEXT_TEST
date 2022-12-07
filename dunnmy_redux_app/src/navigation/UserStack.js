import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';

const Stack = createStackNavigator();

export default function UserStack() {
	console.log('USER STACK ');
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
}
