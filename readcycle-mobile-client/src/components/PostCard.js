import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

export default function PostCard() {
	return (
		<View className="h-44 w-36 mr-8">
			<View className="bg-gray-200 w-full h-full rounded-3xl">
				<View className="h-32 w-3/5 mx-auto my-auto px-0.5 py-0.5 bg-white">
					<Image
						source={require("../../assets/post-pic.jpg")}
						className="h-full w-full overflow-hidden"
					/>
				</View>
			</View>
			<Text className="mt-3 font-bold">Book Title</Text>
			<Text className="mt-1 text-gray-500 text-xs">Book Author</Text>
		</View>
	);
}
