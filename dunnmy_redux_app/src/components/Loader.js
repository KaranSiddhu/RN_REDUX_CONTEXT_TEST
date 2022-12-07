import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function CustomLoader(props) {
	return (
		<View style={styles.modalBackground}>
			<View style={styles.loaderBackground}>
				<ActivityIndicator color={'#FFFFFFFF'} size="large" />
				<Text style={styles.loaderText}>Loading...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	modalBackground: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute'
	},
	loaderBackground: {
		backgroundColor: 'rgba(1,1,1,0.5)',
		width: '50%',
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	loaderText: {
		width: '100%',
		marginTop: 20,
		textAlign: 'center'
	}
});
export default CustomLoader;
