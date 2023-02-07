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

export default function Profile({ route, navigation }) {
	const dispatch = useDispatch();

	const { user, myPosts } = route.params;

	let postContent;
	let userContent;

	if (user) {
		userContent = (
			<View className="gap-4">
				<View className="items-center">
					{user && (
						<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
							<Image
								source={{
									uri: user.avatar,
								}}
								className="h-full w-full rounded-circular"
							></Image>
						</View>
					)}

					<View className="justify-around items-center mt-4">
						<Text className="text-2xl font-bold">{user.fullname}</Text>
						<Text className="text-sm text-gray-400">{user.city}</Text>
					</View>
				</View>
			</View>
		);
	} else {
		userContent = (
			<ActivityIndicator
				size="small"
				className="my-auto mx-auto"
			></ActivityIndicator>
		);
	}

	if (myPosts.length === 0) {
		postContent = (
			<Text className="my-auto mx-auto">You haven't made any post yet.</Text>
		);
	} else {
		postContent = (
			<FlatList
				className="w-full mt-4"
				data={myPosts}
				renderItem={({ item }) => {
					return (
						<PostCard
							navigation={navigation}
							item={item}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => HeaderProfile({ user })}
			/>
		);
	}

	// const { user } = useSelector((state) => {
	// 	return state.user;
	// });

	// useEffect(() => {
	// 	dispatch(actions.fetchUserDetail(+id));
	// 	AsyncStorage.getItem("id").then((data) => setId(data));
	// 	AsyncStorage.getItem("fullname").then((data) => setFullname(data));
	// }, []);

	return (
		// <Text>{JSON.stringify(user)}</Text>
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
						text="Edit Profile"
						onSelect={() => navigation.navigate("EditProfile", { user })}
					/>
					<MenuOption
						text="Report User"
						onSelect={() => navigation.navigate("EditProfile")}
					/>
				</MenuOptions>
			</Menu>

			<View className="items-center px-8">
				{/* {userContent} */}
				<View className="w-full">
					{/* <Text className="text-left text-lg font-semibold">Your Posts</Text> */}
					{/* {postContent} */}
					<FlatList
						className="w-full mt-4"
						data={myPosts}
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
				</View>

				{/* <PostCard navigation={navigation} /> */}
				{/* <PostCard /> */}

				{/* <View className="w-full mt-4">
					<View className="flex-row justify-between border-b-1 py-2 border-gray-300">
						<Text className="w-40 text-sm">The Hunger Games</Text>
						<Text className="w-10 text-sm">Active</Text>
						<TouchableOpacity>
							<Ionicons
                            name="trash-outline"
                            size="16" />
						</TouchableOpacity>
					</View>
                    <View className="flex-row justify-between border-b-1 py-2 border-gray-300">
						<Text className="w-40 text-sm">The Hunger Games</Text>
						<Text className="w-10 text-sm">Active</Text>
						<TouchableOpacity>
							<Ionicons
                            name="trash-outline"
                            size="16" />
						</TouchableOpacity>
					</View>
				</View> */}
			</View>
		</View>
	);
}
