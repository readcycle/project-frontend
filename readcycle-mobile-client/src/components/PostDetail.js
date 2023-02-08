import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from "../store/action/actionCreator";
import { useSelector, useDispatch } from "react-redux";

export default function PostDetail({ route, navigation }) {
	const [id, setId] = useState();
	const { item } = route.params;
	const user = item.User;
	let conditionalButton;
	const dispatch = useDispatch();

	useEffect(() => {
		AsyncStorage.getItem("id").then((data) => setId(+data));
	}, []);

	function handleClose() {
		dispatch(actions.patchPost(item.id)).then(() =>
			navigation.navigate("Home")
		);
	}

	if (item.UserId !== id) {
		conditionalButton = (
			<TouchableOpacity
				className="border-1 border-navy items-center py-2 px-4 h-3/5 rounded-lg bg-navy"
				onPress={() => navigation.navigate("AddBid", { postId: item.id })}
			>
				<Text className="text-white font-semibold">Offer Trade</Text>
			</TouchableOpacity>
		);
	} else {
		conditionalButton = (
			<>
				<TouchableOpacity
					className="border-1 border-navy w-1/4 items-center py-2 px-4 h-3/5 rounded-lg bg-navy"
					onPress={handleClose}
				>
					<Text className="font-semibold text-white">Close</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="border-1 border-navy w-1/4 h-3/5 py-2 px-4 items-center rounded-lg"
					onPress={() => navigation.navigate("BidList", { item: item.id })}
				>
					<Text className="font-semibold">See Offers</Text>
				</TouchableOpacity>
			</>
		);
	}
	return (
		// <Text className="my-auto mx-auto">{JSON.stringify(route.params.item)}</Text>
		<>
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
						<Text className="text-left font-bold text-xl">
							{item.Book.title}
						</Text>
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
				<TouchableOpacity
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
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
			<View className="absolute bottom-4 w-full bg-white h-16 flex-row items-center justify-around">
				{conditionalButton}
				{/* <TouchableOpacity
					className="border-1 border-navy w-1/4 h-3/5 py-2 px-4 items-center rounded-lg"
					onPress={() =>
						navigation.navigate("BidList", { item, postId: item.id })
					}
				>
					<Text className="font-semibold">See bids</Text>
				</TouchableOpacity> */}
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
