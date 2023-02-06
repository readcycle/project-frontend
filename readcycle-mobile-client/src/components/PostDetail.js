import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

export default function PostDetail({ navigation }) {
	return (
		<>
			<ScrollView
				className="mt-8 px-8 h-full w-full"
				contentContainerStyle={styles.wrapper}
			>
				<View className="w-full h-60 bg-white px-4 py-2">
					<Image
						source={require("../../assets/post-pic.jpg")}
						className="h-full w-full object-contain"
					/>
				</View>
				<View className="flex-row mt-6 px-8 py-2 items-center">
					<View className="w-full">
						<Text className="text-left font-bold text-xl">The Whistler</Text>
						<Text className="text-left text-sm">John Grisham</Text>
					</View>
					<View className=" bg-navy justify-center h-10 py-2 px-2 shadow-xl">
						<Text className="text-white font-bold">Thriller</Text>
					</View>
				</View>
				<View className="mt-2 w-full">
					<Text className="text-left text-xs">Condition: 90%</Text>
					<Text className="text-left text-xs">Looking for: Any YA book</Text>
					<Text className="mt-2 text-justify text-xs">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</View>
				<View className="w-full mt-6 bg-white shadow-lg px-4 py-2 rounded-lg justify-center">
					<View className="flex-row justify-between px-4 items-center">
						<View className="h-14 w-14 items-center rounded-circular mt-2">
							<Image
								source={require("../../assets/portrait-example.jpg")}
								className="h-full w-full rounded-circular"
							></Image>
						</View>
						<View className="items-start justify-center ml-16 w-1/2">
							<Text className="font-bold">Albertus Rheza Deniswara</Text>
							<Text className="">Jakarta</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<View className="absolute bottom-4 w-full bg-white h-16 flex-row items-center justify-around">
				<TouchableOpacity
					className="border-1 border-navy w-1/4 items-center py-2 px-4 h-3/5 rounded-lg bg-navy"
					onPress={() => navigation.navigate("AddBid")}
				>
					<Text className="text-white font-semibold">Bid</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="border-1 border-navy w-1/4 h-3/5 py-2 px-4 items-center rounded-lg"
					onPress={() => navigation.navigate("BidList")}
				>
					<Text className="font-semibold">See bids</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = {
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
	},
};
