import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import OnBoardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
	const [isFirstLaunched, setIsFirstLaunched] = useState(false);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem("firstLaunch").then((value) => {
			if (value === null) {
				AsyncStorage.setItem("firstLaunch", "true");
				setIsFirstLaunched(true);
			} else {
				setIsFirstLaunched(false);
			}
		});
	}, []);
	if (isFirstLaunched === null) {
		return null;
	} else if (isFirstLaunched == true) {
		routeName = "Onboarding";
	} else {
		routeName = "Login";
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routeName}>
				<Stack.Screen
					name="OnBoarding"
					component={OnBoardingScreen}
					options={{ header: () => null }}
				/>
				<Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
				<Stack.Screen
					name="Signup"
					component={SignupScreen}
					options={({ navigation }) => ({
						title: "",
						headerStyle: {
							backgroundColor: "#f9fafd",
							shadowColor: "#f9fafd",
							elevation: 0,
						},
						headerLeft: () => (
							<View style={{ marginLeft: 10 }}>
								<FontAwesome.Button
									name="long-arrow-left"
									size={25}
									backgroundColor="#f9fafd"
									color="#333"
									onPress={() => navigation.navigate("Login")}
								/>
							</View>
						),
					})}
				/>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
