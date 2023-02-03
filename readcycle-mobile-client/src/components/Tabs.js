import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Chat from "../screens/Chat";
import { StyleSheet, Button, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					borderRadius: 15,
					height: 90,
                    padding: 16,
					...styles.shadow,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Home") {
						iconName = "home-outline";
					} else if (route.name == "Profile") {
						iconName = "person-outline";
					} else if (route.name == "Chat") {
                        iconName = "chatbubble-ellipses-outline"
                    }

					return (
						<View className="">
							<Ionicons
								name={iconName}
								color="gray"
								size="25"
							/>
						</View>
					);
				},
				tabBarActiveTintColor: "#1d3557",
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
                // options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Chat"
				component={Chat}
                // options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#1d3557",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
