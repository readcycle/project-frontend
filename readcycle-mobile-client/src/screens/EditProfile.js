import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Image,
	Button,
	TouchableOpacity,
	TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function EditProfile({ route, navigation }) {
	console.log(route.params.location)
	const {user} = route.params
	const [image, setImage] = useState(null);
	const [fullname, setFullname] = useState(user.name);
	const [city, setCity] = useState(user.city);
	const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
	const [favoriteGenre, setFavoriteGenre] = useState(user.favoriteGenre);
	const [favoriteBook, setFavoriteBook] = useState(user.favoriteBook);
	const [location, setLocation] = useState(user.location);
	const handleChoosePhoto = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const handleSubmit = () => {
		console.log(
			fullname,
			city,
			phoneNumber,
			favoriteGenre,
			favoriteBook,
			location
		);
		// dispatch(actions.addPost({
		// 	image, title, author, condition, description
		// }))
	};

	return (
		<>
			<StatusBar style="auto" />
			<View className="items-center py-4 px-8">
				<View className="items-center">
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
						<Image
							source={image ? { uri: image } : { uri: user.avatar }}
							className="h-full w-full rounded-circular"
						/>
					</View>
					<TouchableOpacity
						className="my-4"
						onPress={handleChoosePhoto}
					>
						<Text className="text-xs text-blue-600">
							Change profile picture
						</Text>
					</TouchableOpacity>
				</View>
				<View className="w-full items-start my-10">
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Name</Text>
						<TextInput
							defaultValue={user.fullname}
							onChangeText={(input) => {
								setFullname(input);
							}}
						></TextInput>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">City</Text>
						<TextInput
							defaultValue={user.city}
							onChangeText={(input) => {
								setCity(input);
							}}
						></TextInput>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Phone number</Text>
						<TextInput
							defaultValue={user.phoneNumber}
							onChangeText={(input) => {
								setPhoneNumber(input);
							}}
						></TextInput>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Favorite genre</Text>
						<TextInput
							defaultValue={user.favoriteGenre}
							onChangeText={(input) => {
								setFavoriteGenre(input);
							}}
						></TextInput>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text
							className="font-bold"
							onChangeText={(input) => {
								setFavoriteBook(input);
							}}
						>
							Favorite book
						</Text>
						<TextInput defaultValue={user.favoriteBook}></TextInput>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Location</Text>
						{/* <Text>Jakarta</Text> */}
						<TouchableOpacity
						className="mt-4 border-1 border-navy px-2 py-1 w-1/2"
						onPress={() => {
							navigation.navigate("Map", { targetPage: "EditProfile", user});
						}}
					>
						<Text className="text-center">Set Location</Text>
					</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					className="bg-navy px-4 py-2"
					onPress={handleSubmit}
				>
					<Text className="text-xl text-white">Save</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
