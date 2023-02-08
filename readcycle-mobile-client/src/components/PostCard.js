import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostCard({ navigation, item, prevPage }) {
	const navigate = useNavigation();
	// const { prevPage } = route.params;
	const onPress = () => {
		if (prevPage !== "UserBidList") {
			navigate.navigate("PostDetail", {
				item,
			});
		}
	};

	return (
		<TouchableOpacity
			className="h-28 flex-row justify-start w-full mb-4 shadow-2xl px-4 bg-white py-2 rounded-lg"
			onPress={onPress}
		>
			<View className="w-1/3">
				<Image
					source={{
						uri: item.imageUrl,
					}}
					className="h-full w-full object-contain"
				/>
			</View>
			<View className="ml-10 py-1">
				<Text className="font-bold">{item.Book.title}</Text>
				<Text className="mt-1 text-gray-500 text-xs">{item.Book.author}</Text>
				<Text className=" text-gray-500 text-xs">{item.Book.Genre.name}</Text>
				<Text className="mt-4 text-xs">{`Posted by ${item.User.fullname}`}</Text>
			</View>
		</TouchableOpacity>
	);
}
