import { View, Text, TouchableOpacity, Image } from "react-native";

export default function NotificationCard({ item, navigation }) {
	return (
		<TouchableOpacity
			className="justify-start bg-white mb-4 px-6 py-3 rounded-lg flex-row items-center"
			onPress={() => navigation.navigate("BidList", { item: item.PostId })}
		>
			<View className="h-8 w-8 items-center rounded-circular mr-4">
				<Image
					source={{
						uri: item.User.avatar,
					}}
					className="h-full w-full rounded-circular"
				></Image>
			</View>
			<View className="flex-row flex-wrap w-4/5">
				<Text className="text-sm">
					<Text className="font-bold">{item.User.fullname}</Text>
					{` offered a trade with your book, `}
					<Text className="font-bold">{item.Book.title}</Text>
				</Text>
			</View>
		</TouchableOpacity>
	);
}
