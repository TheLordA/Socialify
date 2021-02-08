import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button title="Click Here" onPress={() => alert("Button Clicked !!!")}></Button>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
