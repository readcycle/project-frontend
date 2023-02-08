import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Modal,
	Pressable,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PostCard from "../components/PostCard";
import Profile from "./EditProfile";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from "react-native-popup-menu";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderHome from "../components/HeaderHome";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

// let id;
// let fullname;

export default function Home({ navigation }) {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const [fullname, setFullname] = useState("");
	const [id, setId] = useState(null);
	const [long, setLong] = useState(null);
	const [lat, setLat] = useState(null);
	const [avatar, setAvatar] = useState(null);

	const { user } = useSelector((state) => {
		return state.user;
	});

	const { posts } = useSelector((state) => {
		return state.post;
	});

	const myPosts = posts.filter((el) => {
		return el.User.id === id;
	});

	const genres = useSelector((state) => {
		return state.genre.genres;
	});

	useEffect(() => {
		setAvatar(user.avatar);
	}, [user]);

	useEffect(() => {
		setLoading(true);
		AsyncStorage.getItem("id").then((data) => {
			setId(data);
			dispatch(actions.fetchUserDetail(+data));
		});
		AsyncStorage.getItem("fullname").then((data) => setFullname(data));
		AsyncStorage.getItem("long").then((data) => setLong(data));
		AsyncStorage.getItem("lat").then((data) => setLat(data));
		dispatch(actions.fetchGenres());
		dispatch(
			actions.fetchAllPosts({
				long: long,
				lat: lat,
			})
		).finally(() => setLoading(false));
		// .catch((err) => console.log(err));
		// setLoading(true)
		// 	.then(() => dispatch(actions.fetchGenres()))
		// 	.then(() => setLoading(false));
	}, []);

	useFocusEffect(
		useCallback(() => {
			dispatch(
				actions.fetchAllPosts({
					long: long,
					lat: lat,
				})
			);
		}, [])
	);

	const [modalVisible, setModalVisible] = useState(false);

	const [value, setValue] = useState(null);
	// const renderLabel = () => {
	// 	if (value || isFocus) {
	// 		return (
	// 			<Text style={[styles.label, isFocus && { color: "blue" }]}>
	// 				Select Genre
	// 			</Text>
	// 		);
	// 	}
	// 	return null;
	// };

	if (loading) return <ActivityIndicator size="large" />;
	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View
						style={styles.modalView}
						className="w-4/5"
					>
						<Text style={styles.modalText}>Search Books</Text>
						<View className="flex-row items-center w-full bg-gray-100 rounded-circular py-2 px-2">
							<Ionicons
								name="search-outline"
								color="gray"
								size="16"
							></Ionicons>
							<TouchableOpacity
								onPress={() => {
									setModalVisible(true);
								}}
							>
								<TextInput className="text-gray-400 ml-4">
									Search by title
								</TextInput>
							</TouchableOpacity>
						</View>
						<View className="flex-row w-full justify-between items-center mt-4 px-2">
							{/* {renderLabel()} */}
							<Dropdown
								className="w-full border-md"
								data={genres}
								maxHeight={200}
								maxWidth={800}
								// itemTextStyle={{ fontSize: "14px" }}
								// selectedTextStyle={{ fontSize: "14px" }}
								labelField="name"
								valueField="id"
								value={value}
								onChange={(item) => {
									setValue(item.id);
								}}
								// renderLeftIcon={() => (
								// 	<AntDesign
								// 		style={styles.icon}
								// 		color={isFocus ? "blue" : "black"}
								// 		name="Safety"
								// 		size={20}
								// 	/>
								// )}
							/>
						</View>
						<View className="flex-row justify-around w-full">
							<Pressable
								className="py-2 px-4 bg-navy rounded-xl mt-6"
								onPress={() => setModalVisible(false)}
							>
								<Text style={styles.textStyle}>Search</Text>
							</Pressable>
							<Pressable
								className="py-2 px-4 bg-white border-1 border-navy rounded-xl mt-6"
								onPress={() => {
									setModalVisible(false);
									setValue("");
								}}
							>
								<Text className="text-navy font-bold">Cancel</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<View
				className="h-screen w-full mt-10 px-8"
				contentContainerStyle={styles.wrapper}
			>
				<View className="flex-row justify-between items-center">
					<View className="h-20 w-full flex-row justify-start items-center">
						<TouchableOpacity
							className="h-14 w-14"
							onPress={() => navigation.navigate("Profile", { user, myPosts })}
						>
							<Image
								source={{
									uri: avatar,
								}}
								className="h-full w-full rounded-circular"
							></Image>
						</TouchableOpacity>
					</View>
					<Menu className="rounded-circular border-1 px-1 py-1 h-5 w-5">
						<MenuTrigger>
							<Ionicons
								name="ellipsis-horizontal-outline"
								size="10"
							/>
						</MenuTrigger>
						<MenuOptions>
							<MenuOption
								text="Logout"
								onSelect={() => {
									AsyncStorage.clear().then(() => navigation.navigate("Login"));
								}}
							/>
						</MenuOptions>
					</Menu>
				</View>
				<View className="w-full my-8">
					<Text className="text-left text-2xl font-bold">{fullname}</Text>
				</View>
				{/* <DropDownPicker
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
				/> */}

				<View className="flex-row items-center bg-gray-100 w-4/5 rounded-circular ">
					<Ionicons
						name="search-outline"
						color="gray"
						size="16"
					></Ionicons>
					<TouchableOpacity
						onPress={() => {
							setModalVisible(true);
						}}
					>
						<Text className="text-gray-400 ml-4">Search books</Text>
					</TouchableOpacity>
				</View>

				<View className="w-full mt-10">
					<Text className="text-left text-lg font-semibold">
						Books Near You
					</Text>
				</View>
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
					// ListHeaderComponent={() => HeaderHome({ navigation, user, posts, genres })}
				></FlatList>
			</View>

			<TouchableOpacity
				className="absolute w-16 h-16 bottom-36 right-8 items-center"
				onPress={() => navigation.navigate("AddPost")}
			>
				<Image
					source={require("../../assets/add-button-2.jpg")}
					className="w-16 h-16 object-contain"
				/>
			</TouchableOpacity>
		</>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		alignItems: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},

	// dropdown: {
	//     height: '',
	//     borderColor: 'gray',
	//     borderWidth: 0.5,
	//     borderRadius: 8,
	//     paddingHorizontal: 8,
	//   },
};
