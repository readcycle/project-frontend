import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostCard({ navigation, item, prevPage }) {
	const navigate = useNavigation();
	// const { prevPage } = route.params;
	const onPress = () => {
		if (prevPage !== "UserBidList" && item.isClosed === false) {
			navigate.navigate("PostDetail", {
				item,
			});
		}
	};

	// if (item.isClosed == true) {
	// 	cardStyle =
	// 		"h-28 flex-row justify-start w-full mb-4 shadow-2xl px-4 bg-gray-400 py-2 rounded-lg";
	// } else {
	// } // otak gua udh mulai error // nanggung

	return (
		<TouchableOpacity
			className="h-28 flex-row justify-start w-full mb-4 shadow-2xl px-4 bg-white py-2 rounded-lg"
			onPress={onPress}
		>
			{item.isClosed === true ? (
				<View className="absolute -top-3 right-2 bg-red-300 px-2 py-1">
					<Text className="text-gray-800 tracking-wide font-semibold">CLOSED</Text>
				</View>
			) : (
				""
			)}

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
	// <Text>{JSON.stringify(item.Book.id)}</Text>;
}
