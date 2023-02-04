import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";

export default function PostCard({ navigation }) {
	return (
		<TouchableOpacity
			className="h-28 flex-row justify-start w-full mr-8 mb-4 shadow-2xl px-4 bg-white py-2 rounded-lg"
			onPress={() => navigation.push("PostDetail")}
		>
			<View className="w-1/3">
				<Image
					source={require("../../assets/post-pic.jpg")}
					className="h-full w-full object-contain"
				/>
			</View>
			<View className="ml-10 py-1">
				<Text className="font-bold">The Whistler</Text>
				<Text className="mt-1 text-gray-500 text-xs">John Grisham</Text>
				<Text className=" text-gray-500 text-xs">Thriller</Text>
				<Text className="mt-4 text-xs">Posted by Albertus</Text>
			</View>
		</TouchableOpacity>
	);
}
