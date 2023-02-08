import { ScrollView, View, Text, Image } from "react-native";

export default function BidDetail({ route }) {
	const { item } = route.params;
	return (
		// <Text>{JSON.stringify(item)}</Text>
		<ScrollView
			className="mt-8 px-8 h-full w-full"
			contentContainerStyle={styles.wrapper}
		>
			<View className="w-full h-60 bg-white px-4 py-2">
				<Image
					source={{
						uri: item.imageUrl,
					}}
					className="h-full w-full object-contain"
				/>
			</View>
			<View className="flex-row mt-6 px-8 py-2 items-between">
				<View className="w-full">
					<Text className="text-left font-bold text-xl">{item.Book.title}</Text>
					<Text className="text-left text-sm">{item.Book.author}</Text>
				</View>
				<View className=" bg-navy justify-center h-10 py-2 px-2 shadow-xl">
					<Text className="text-white font-bold">{item.Book.Genre.name}</Text>
				</View>
			</View>
			<View className="mt-2 w-full">
				<Text className="text-left text-xs">{`Condition: ${item.condition}%`}</Text>
				<Text className="mt-4 text-justify text-xs">{item.description}</Text>
			</View>
			<View
				className="w-full mt-6 bg-white shadow-lg px-4 py-2 rounded-lg justify-center"
				onPress={() => {
					navigation.navigate("OtherProfile", { user, userId: item.UserId });
				}}
			>
				<View className="flex-row justify-between px-4 items-center">
					<View className="h-14 w-14 items-center rounded-circular mt-2">
						<Image
							source={{
								uri: item.User.avatar,
							}}
							className="h-full w-full rounded-circular"
						></Image>
					</View>
					<View className="items-start justify-center ml-16 w-1/2">
						<Text className="font-bold">{item.User.fullname}</Text>
						<Text className="">{item.User.city}</Text>
						<Text className="">{item.User.phoneNumber}</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = {
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
	},
};
