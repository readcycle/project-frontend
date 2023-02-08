import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Image,
	Button,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from "react-native";
import PostCard from "../components/PostCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from "react-native-popup-menu";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";
import { useState, useEffect } from "react";
import HeaderProfile from "../components/HeaderProfile";
import UserBidList from "./UserBidList";
import { fetchAllPosts } from "../store/action/actionCreator";

export default function OtherProfile({ route, navigation }) {
	const { user, userId } = route.params;
	const dispatch = useDispatch();
	const { posts } = useSelector((state) => state.post);

	useEffect(() => {
		dispatch(fetchAllPosts({ user: userId }));
	}, []);

	let postContent;
	if (posts.length === 0) {
		postContent = (
			<View>
				<Text className="my-auto mx-auto">This user hasn't made any post yet.</Text>
			</View>
		);
	}

	return (
		<View className="w-screen h-screen">
			<Menu className="rounded-circular border-1 px-1 py-1 h-5 w-5 mt-10 mx-8 self-end">
				<MenuTrigger>
					<Ionicons
						name="ellipsis-horizontal-outline"
						size="10"
					/>
				</MenuTrigger>
				<MenuOptions customStyles={{ optionsContainer: { width: 100 } }}>
					<MenuOption
						text="Report User"
						onSelect={() => navigation.navigate("AddReport", {userId})}
					/>
				</MenuOptions>
			</Menu>

			<View className="items-center px-8">
				<View className="w-full">
					<FlatList
						className="w-full mt-4"
						data={posts}
						renderItem={({ item }) => {
							return (
								<PostCard
									navigation={navigation}
									item={item}
								/>
							);
						}}
						keyExtractor={(item) => item.id}
						ListHeaderComponent={() => HeaderProfile({ user, navigation })}
					/>
					{postContent}
				</View>
			</View>
		</View>
	);
}
