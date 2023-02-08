import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BidCard({ item }) {
	return (
		// <Text>{JSON.stringify(item)}</Text>
		<TouchableOpacity
			className="h-28 flex-row justify-start w-full mb-4 shadow-2xl px-4 bg-white py-2 rounded-lg"
			onPress={() => navigation.push("BidDetail")}
		>
			<View className="w-1/3">
				<Image
					source={require("../../assets/post-pic.jpg")}
					className="h-full w-full object-contain"
				/>
			</View>
			<View className="ml-10 py-1 w-2/3">
				<Text className="font-bold">{item.Book.title}</Text>
				<Text className="mt-1 text-gray-500 text-xs">{item.Book.author}</Text>
				<Text className=" text-gray-500 text-xs">{item.Book.Genre.name}</Text>
				<Text className="mt-4 text-xs">{`Posted by ${item.User.fullname}`}</Text>
			</View>
			<TouchableOpacity className="absolute right-4 bottom-8">
				<Ionicons
					name="chatbubbles-outline"
					size="40"
				></Ionicons>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
