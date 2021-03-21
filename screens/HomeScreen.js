import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<View contentContainerStyle={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 50,
	},
});
