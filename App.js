import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Index from "./navigation/index";

const App = () => {
	let [fontsLoaded] = useFonts({
		"Kufam-SemiBoldItalic": require("./assets/fonts/Kufam-SemiBoldItalic.ttf"),
		"Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
		"Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else return <Index />;
};

export default App;
