import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";

export default function EditProfile() {
	return (
		<>
			<StatusBar style="auto" />
			<View className="items-center py-4 px-8">
					<View>
						<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
							<Image
								source={require("../../assets/portrait-example.jpg")}
								className="h-full w-full rounded-circular"
							></Image>
						</View>
						<TouchableOpacity className="my-4">
							<Text className="text-xs text-blue-600">
								Change profile picture
							</Text>
						</TouchableOpacity>
					</View>
				<View className="w-full items-start my-10">
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text>Name</Text>
						<Text>Chris Pratt</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text>Location</Text>
						<Text>Jakarta</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text>Favorite genre</Text>
						<Text>Fantasy</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text>Favorite book</Text>
						<Text>The Hunger Games</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text>Location</Text>
						<Text>Jakarta</Text>
					</View>
				</View>
			</View>
		</>
	);
}
