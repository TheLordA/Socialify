import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddPostScreen from "../screens/AddPostScreen";
import MessagesScreen from "../screens/MessageScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
	<Stack.Navigator>
		<Stack.Screen
			name="Socialify"
			component={HomeScreen}
			options={{
				headerTitleAlign: "center",
				headerTitleStyle: {
					color: "#2e64e5",
					fontFamily: "Kufam-SemiBoldItalic",
					fontSize: 18,
				},
				headerStyle: {
					shadowColor: "#fff",
					elevation: 0,
				},
				headerRight: () => (
					<View style={{ marginRight: 10 }}>
						<FontAwesome5.Button
							name="plus"
							size={22}
							backgroundColor="#fff"
							color="#2e64e5"
							onPress={() => navigation.navigate("Add Post")}
						/>
					</View>
				),
			}}
		/>
		<Stack.Screen
			name="Add Post"
			component={AddPostScreen}
			options={{
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: "#fff",
					//shadowColor: "#2e64e515",
					elevation: 0,
				},
				headerBackTitleVisible: false,
				headerBackImage: () => (
					<View style={{ marginLeft: 15 }}>
						<Ionicons name="arrow-back" size={25} color="#2e64e5" />
					</View>
				),
			}}
		/>
		<Stack.Screen
			name="HomeProfile"
			component={ProfileScreen}
			options={{
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: "#fff",
					shadowColor: "#fff",
					elevation: 0,
				},
				headerBackTitleVisible: false,
				headerBackImage: () => (
					<View style={{ marginLeft: 15 }}>
						<Ionicons name="arrow-back" size={25} color="#2e64e5" />
					</View>
				),
			}}
		/>
	</Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
	<Stack.Navigator>
		<Stack.Screen name="Messages" component={MessagesScreen} />
		<Stack.Screen
			name="Chat"
			component={ChatScreen}
			options={({ route }) => ({
				title: route.params.userName,
				headerBackTitleVisible: false,
			})}
		/>
	</Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
	<Stack.Navigator>
		<Stack.Screen
			name="Profile"
			component={ProfileScreen}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name="EditProfile"
			component={EditProfileScreen}
			options={{
				//headerTitle: "Edit Profile",
				headerBackTitleVisible: false,
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: "#fff",
					shadowColor: "#fff",
					elevation: 0,
				},
			}}
		/>
	</Stack.Navigator>
);

const AppStack = () => {
	const getTabBarVisibility = (route) => {
		const routeName = getFocusedRouteNameFromRoute(route);
		if (routeName === "Chat") {
			return false;
		}
		return true;
	};
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#2e64e5",
			}}
		>
			<Tab.Screen
				name="Home"
				component={FeedStack}
				options={({ route }) => ({
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home-outline" color={color} size={size} />
					),
				})}
			/>
			<Tab.Screen
				name="Messages"
				component={MessageStack}
				options={({ route }) => ({
					tabBarVisible: getTabBarVisibility(route),
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
					),
				})}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-outline" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

// this function needs to be modified later
const getHeaderTitle = (route) => {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	// In our case, it's "Feed" as that's the first screen inside the navigator
	const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

	switch (routeName) {
		case "Feed":
			return "News feed";
		case "Profile":
			return "My profile";
		case "Account":
			return "My account";
	}
};

export default AppStack;
