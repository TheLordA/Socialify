import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { AuthContext } from "./AuthProvider";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Index = () => {
	// Just to Bypass Authentification features until it will built
	const [user, setUser] = useState(true);

	return <NavigationContainer>{user ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default Index;
