import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "../screens/EditProfile";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileStacks() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="EditProfile"
				component={EditProfile}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
