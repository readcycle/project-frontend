import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

export default function PostCard() {
	return (
		<View className="h-32 flex-row justify-start w-full mr-8 mb-4 shadow-2xl px-4 bg-white py-4 rounded-lg">
			<View className="w-1/3">
				<Image
					source={require("../../assets/post-pic.jpg")}
					className="h-full w-full object-contain"
				/>
			</View>
			<View className="ml-10">
				<Text className="mt-3 font-bold">The Whistler</Text>
				<Text className="mt-1 text-gray-500 text-xs">John Grisham</Text>
                <Text className="mt-4 text-xs">Posted by Albertus</Text>
			</View>
		</View>
	);
}
