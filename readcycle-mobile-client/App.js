import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/LandingPage";
import Main from "./src/components/Main";
import Register from "./src/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "./src/screens/EditProfile";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
    // <Register />
    // <LandingPage />
    // <Login />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={Main}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EditProfile"
					component={EditProfile}
          options={{title: 'Edit Profile'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
