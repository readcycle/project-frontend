import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function Register() {
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
		<View className="mx-auto px-8 pt-20 w-screen">
			<View className="w-full">
				<Text className="font-bold text-2xl tracking-wider text-center text-navy mt-10">
					Get Started with Readcycle
				</Text>
			</View>
			<View className="mt-20">
				<View className="mt-2">
					<Text className="font-semibold">Full name: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Full name"
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Email: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Email"
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Password: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Password"
					></TextInput>
				</View>
				<View className="mt-2 mx-auto items-center">
					<Text className="font-semibold">Upload a profile picture</Text>
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted mt-4">
						<Image
							source={
								image
									? { uri: image }
									: require("../../assets/portrait-example.jpg")
							}
							className="h-full w-full rounded-circular"
						/>
					</View>
					<TouchableOpacity className="mt-4 border-1 border-navy px-2 py-1" onPress={handleChoosePhoto}>
						<Text>Choose picture</Text>
					</TouchableOpacity>
				</View>
				{/* <View className="mt-2">
					<Text className="font-semibold">Phone Number: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Phone number"
					></TextInput>
				</View>
                <View className="mt-2">
					<Text className="font-semibold">City: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Phone number"
					></TextInput>
				</View> */}
			</View>
			<TouchableOpacity className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center">
				<Text className="text-white font-bold uppercase tracking-wider">
					Create Account
				</Text>
			</TouchableOpacity>
		</View>
	);
}
