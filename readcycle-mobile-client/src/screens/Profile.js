import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import PostCard from "../components/PostCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from "react-native-popup-menu";

export default function Profile({ navigation }) {
	return (
		<View className="w-screen h-screen">
			<Menu className="rounded-circular border-1 px-1 py-1 h-5 w-5 mt-20 mx-8 self-end">
				<MenuTrigger>
					<Ionicons
						name="ellipsis-horizontal-outline"
						size="10"
					/>
				</MenuTrigger>
				<MenuOptions customStyles={{optionsContainer: {width: 100}}}>
					<MenuOption
						text="Edit Profile"
						onSelect={() => navigation.navigate("EditProfile")}
					/>
                    	<MenuOption
						text="Report User"
						onSelect={() => navigation.navigate("EditProfile")}
					/>
				</MenuOptions>
			</Menu>

			<View className="items-center py-4 px-8">
				<View className="gap-4">
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
						<Image
							source={require("../../assets/portrait-example.jpg")}
							className="h-full w-full rounded-circular"
						></Image>
					</View>
					<View className="w-1/2 justify-around items-center">
						<Text className="text-2xl font-bold">Chris Pratt</Text>
                        <Text className="text-sm text-gray-400">Jakarta</Text>
						{/* <TouchableOpacity
							className="mt-10 border-2 px-2 py-1 rounded-circular border-navy"
							onPress={() => {
								navigation.navigate("EditProfile");
							}}
						>
							<Text className="text-xs">Edit Profile</Text>
						</TouchableOpacity> */}
					</View>
				</View>
				<View className="w-full mt-10">
					<Text className="text-left text-lg font-semibold">Your Posts</Text>
				</View>
				<View className="w-full mt-4 flex-row">
					<PostCard navigation={navigation}/>
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
		</View>
	);
}
