import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import PostCard from "../components/PostCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile({ navigation }) {
	return (
		<>
			<StatusBar style="auto" />
			<View className="items-center py-4 px-8">
				<View className="flex-row justify-between w-full">
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
					<View className="w-1/2 justify-around items-center gap-4">
						<Text className="text-2xl font-bold">Chris Pratt</Text>
						<TouchableOpacity
							className="mt-10 border-2 px-2 py-1 rounded-circular border-navy"
							onPress={() => {
								navigation.navigate("EditProfile");
							}}
						>
							<Text className="text-xs">Edit Profile</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View className="w-full mt-10">
					<Text className="text-left text-lg font-semibold">Your Posts</Text>
				</View>
				<View className="w-full mt-4 flex-row">
					<PostCard />
					{/* <PostCard /> */}
				</View>

				{/* <View className="w-full mt-4">
					<View className="flex-row justify-between border-b-1 py-2 border-gray-300">
						<Text className="w-40 text-sm">The Hunger Games</Text>
						<Text className="w-10 text-sm">Active</Text>
						<TouchableOpacity>
							<Ionicons
                            name="trash-outline"
                            size="16" />
						</TouchableOpacity>
					</View>
                    <View className="flex-row justify-between border-b-1 py-2 border-gray-300">
						<Text className="w-40 text-sm">The Hunger Games</Text>
						<Text className="w-10 text-sm">Active</Text>
						<TouchableOpacity>
							<Ionicons
                            name="trash-outline"
                            size="16" />
						</TouchableOpacity>
					</View>
				</View> */}
			</View>
		</>
	);
}
