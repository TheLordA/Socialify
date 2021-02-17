import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Create an account</Text>

			<FormInput
				labelValue={email}
				onChangeText={(userEmail) => setEmail(userEmail)}
				placeholderText="Email"
				iconType="user"
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
			/>

			<FormInput
				labelValue={password}
				onChangeText={(userPassword) => setPassword(userPassword)}
				placeholderText="Password"
				iconType="lock"
				secureTextEntry={true}
			/>

			<FormInput
				labelValue={confirmPassword}
				onChangeText={(userPassword) => setConfirmPassword(userPassword)}
				placeholderText="Confirm Password"
				iconType="lock"
				secureTextEntry={true}
			/>

			<FormButton buttonTitle="Sign Up" onPress={() => alert("SignUp Clicked!")} />

			<View style={styles.textPrivate}>
				<Text style={styles.color_textPrivate}>
					By registering, you confirm that you accept our{" "}
				</Text>
				<TouchableOpacity onPress={() => alert("Terms Clicked!")}>
					<Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
						Terms of service
					</Text>
				</TouchableOpacity>
				<Text style={styles.color_textPrivate}> and </Text>
				<Text style={[styles.color_textPrivate, { color: "#e88832" }]}>Privacy Policy</Text>
			</View>

			{/* {Platform.OS === "android" ? (
				<View>
					<SocialButton
						buttonTitle="Sign Up with Facebook"
						btnType="facebook"
						color="#4867aa"
						backgroundColor="#e6eaf4"
						onPress={() => {}}
					/>

					<SocialButton
						buttonTitle="Sign Up with Google"
						btnType="google"
						color="#de4d41"
						backgroundColor="#f5e7ea"
						onPress={() => {}}
					/>
				</View>
			) : null} */}

			<View style={styles.textPrivate}>
				<Text style={styles.color_textPrivate}>Already have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.callToAction}> Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f9fafd",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	text: {
		fontFamily: "Kufam-SemiBoldItalic",
		fontSize: 28,
		marginBottom: 40,
		color: "#051d5f",
	},
	navButton: {
		marginTop: 15,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: "500",
		color: "#2e64e5",
		fontFamily: "Lato-Regular",
	},
	textPrivate: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 20,
		justifyContent: "center",
	},
	color_textPrivate: {
		fontSize: 15,
		fontWeight: "400",
		fontFamily: "Lato-Regular",
		color: "grey",
		marginTop: 5,
	},
	callToAction: { fontSize: 20, fontWeight: "400", fontFamily: "Lato-Regular", color: "#2e64e5" },
});

export default SignupScreen;
