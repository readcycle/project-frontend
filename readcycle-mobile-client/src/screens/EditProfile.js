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

export default function EditProfile() {
	const [image, setImage] = useState(null);
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
	return (
		<>
			<StatusBar style="auto" />
			<View className="items-center py-4 px-8">
				<View className="items-center">
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
						<Image
							source={
								image
									? { uri: image }
									: require("../../assets/portrait-example.jpg")
							}
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
						<Text>Chris Pratt</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Location</Text>
						<Text>Jakarta</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Phone Number</Text>
						<Text>08121234567</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Favorite genre</Text>
						<Text>Fantasy</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Favorite book</Text>
						<Text>The Hunger Games</Text>
					</View>
					<View className="flex-row justify-between w-full border-b-1 border-gray-300 py-6 px-2">
						<Text className="font-bold">Location</Text>
						<Text>Jakarta</Text>
					</View>
				</View>
			</View>
		</>
	);
}
