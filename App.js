import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnBoardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
	const [isFirstLaunched, setIsFirstLaunched] = useState(false);
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

	if (isFirstLaunched === null) return null;
	else if (isFirstLaunched === true) {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return <LoginScreen />;
	}
};

export default App;
