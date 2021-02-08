import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const OnBoardingScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>OnBoarding Screen</Text>
			<Button title="Click Here" onPress={() => navigation.navigate("Login")}></Button>
		</View>
	);
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
