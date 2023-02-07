import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function AddBid() {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [condition, setCondition] = useState("");
	const [description, setDescription] = useState("");
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
		<ScrollView className="mx-auto px-8 w-screen">
			<View className="mt-8">
				<View className="mt-2">
					<Text className="font-semibold">Book title: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Book title"
						onChangeText={(input) => setTitle(input)}
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Book author: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Book author"
						onChangeText={(input) => setAuthor(input)}
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Book condition (%): </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Book condition"
						onChangeText={(input) => setCondition(input)}
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Description: </Text>
					<TextInput
						multiline={true}
						numberOfLines={4}
						className="my-2 h-20 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Book description"
						onChangeText={(input) => setDescription(input)}
					></TextInput>
				</View>
				<View className="mt-8 mx-auto items-center">
					<Text className="font-semibold">Upload a picture of your book: </Text>
					<View className="h-28 w-28 items-center border-2 border-dotted mt-4">
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
						className="mt-4 border-1 border-navy px-2 py-1"
						onPress={handleChoosePhoto}
					>
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
					Post
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
