import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function LandingPage() {
	return (
		<View className="justify-start h-full px-8 pt-20">
			<View className="h-2/3 w-full justify-center items-center">
				<Image
					source={require("../../assets/landing-page-illustration-1.jpg")}
					className="h-1/2 w-full object-contain"
				/>
				<View className="mt-10 ">
					<Text className="text-lg text-navy font-semibold">
						New home for your old books.
					</Text>
				</View>
			</View>
			<View className="w-full"></View>

			<View className="flex-row justify-center gap-8 items-center h-1/3">
				<TouchableOpacity className="bg-navy rounded-2xl px-8 py-4 shadow-2xl">
					<Text className="text-white font-bold">Sign Up</Text>
				</TouchableOpacity>
				<TouchableOpacity className="bg-white rounded-2xl px-8 py-4 shadow-2xl border-navy border-1">
					<Text className="text-navy font-bold">Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
