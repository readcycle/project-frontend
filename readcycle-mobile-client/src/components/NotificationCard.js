import { View, Text, TouchableOpacity } from "react-native";

export default function NotificationCard({ item, navigation }) {
	return (
		<TouchableOpacity
			className="h-16 justify-center"
			onPress={() => navigation.navigate("BidList", {item: item.PostId})}
		>
			<Text>{`${item.User.fullname} raised a bid to your post, ${item.Book.title}`}</Text>
		</TouchableOpacity>
	);
}
