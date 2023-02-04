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
} from "react-native";
import { useState } from "react";
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
import { BlurView } from "expo-blur";

export default function Home({ navigation }) {
	const data = [
		{ label: "All", value: "" },
		{ label: "Fantasy", value: "1" },
		{ label: "Horror", value: "2" },
		{ label: "Thriller", value: "3" },
		{ label: "Romance", value: "4" },
		{ label: "Non-fiction", value: "5" },
		{ label: "Biography", value: "6" },
	];

	const [modalVisible, setModalVisible] = useState(false);

	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
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

	return (
		<>
			<TouchableOpacity onPress={() => setModalVisible(false)}>
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
							<Text style={styles.modalText}>Search Book</Text>
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
							<View className="flex-row w-full b justify-between items-center mt-4 px-2">
								{/* {renderLabel()} */}
								<Dropdown
									className="w-full border-md"
									data={data}
									maxHeight={200}
									maxWidth={800}
									itemTextStyle={{ fontSize: "14px" }}
									selectedTextStyle={{ fontSize: "14px" }}
									labelField="label"
									valueField="value"
									value={value}
									onChange={(item) => {
										setValue(item.value);
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
			</TouchableOpacity>

			<ScrollView
				className="h-screen w-full mt-10 px-8"
				contentContainerStyle={styles.wrapper}
			>
				<View className="flex-row justify-between items-center">
					<View className="h-20 w-full flex-row justify-start items-center">
						<View className="h-14 w-14">
							<Image
								source={require("../../assets/portrait-example.jpg")}
								className="h-full w-full rounded-circular"
							></Image>
						</View>
					</View>
					<Menu className="rounded-circular border-1 px-1 py-1 h-5 w-5">
						<MenuTrigger>
							<Ionicons
								name="ellipsis-horizontal-outline"
								size="10"
							/>
						</MenuTrigger>
						<MenuOptions>
							<MenuOption text="Logout" />
						</MenuOptions>
					</Menu>
				</View>
				<View className="w-full my-8">
					<Text className="text-left text-2xl font-bold">
						Hello, Chris Pratt!
					</Text>
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
				<View className="w-full mt-4">
					<PostCard navigation={navigation} />
					<PostCard navigation={navigation} />
				</View>
			</ScrollView>

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
