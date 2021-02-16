import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Image source={require("../assets/SocialifyIcon.png")} style={styles.logo} />

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

			<FormButton buttonTitle="Sign In" onPress={() => alert("Login Clicked !!!")} />

			<View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10 }}>
				<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
				<View>
					<Text style={{ width: 50, textAlign: "center" }}> Or </Text>
				</View>
				<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
			</View>

			{/* {Platform.OS === "android" ? (
				<View>
					<SocialButton
						buttonTitle="Sign In with Facebook"
						btnType="facebook"
						color="#4867aa"
						backgroundColor="#e6eaf4"
						onPress={() => alert("Facebook Clicked !!!")}
					/>

					<SocialButton
						buttonTitle="Sign In with Google"
						btnType="google"
						color="#de4d41"
						backgroundColor="#f5e7ea"
						onPress={() => alert("Google Clicked !!!")}
					/>
				</View>
			) : null} */}

			<View>
				<SocialButton
					buttonTitle="Sign In with Facebook"
					btnType="facebook"
					color="#4867aa"
					backgroundColor="#e6eaf4"
					onPress={() => alert("Facebook Clicked !!!")}
				/>

				<SocialButton
					buttonTitle="Sign In with Google"
					btnType="google"
					color="#de4d41"
					backgroundColor="#f5e7ea"
					onPress={() => alert("Google Clicked !!!")}
				/>
			</View>
			<View
				style={{ flexDirection: "column", alignItems: "center", marginBottom: 10, marginTop: 30 }}
			>
				<TouchableOpacity
					style={styles.forgotButton}
					onPress={() => {
						// console.log(navigation);
						navigation.navigate("Signup");
					}}
				>
					<Text style={styles.navButtonText}>Don't have an account? Create it</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
					<Text style={styles.navButtonText}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 50,
	},
	logo: {
		/* height: 150,
		width: 150,
		resizeMode: "cover", */
		marginTop: 95,
		marginBottom: 60,
	},
	SignInButton: {},
	text: {
		fontFamily: "Kufam-SemiBoldItalic",
		fontSize: 28,
		marginBottom: 10,
		color: "#000",
	},
	navButton: {
		marginTop: 15,
	},
	forgotButton: {
		marginBottom: 10,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: "500",
		color: "#2e64e5",
		fontFamily: "Lato-Regular",
	},
});
