import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Login() {
	return (
		<View className="my-auto mx-auto">
			<Text className="">This is Login Page</Text>
			<StatusBar style="auto" />
		</View>
	);
}