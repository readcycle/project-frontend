import {
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";
import * as DocumentPicker from "expo-document-picker";
import { Dropdown } from "react-native-element-dropdown";

export default function AddBid({ route, navigation }) {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [condition, setCondition] = useState("");
	const [description, setDescription] = useState("");
	const [preview, setPreview] = useState("");
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const genres = useSelector((state) => {
		return state.genre.genres;
	});

	const { postId } = route.params;

	const handleChoosePhoto = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		if (!result.canceled) {
			let uri = result.assets[0].uri;
			let filename = uri.split("/").pop();

			// Infer the type of the image
			let match = /\.(\w+)$/.exec(filename);
			let type = match ? `image/${match[1]}` : `image`;

			// Upload the image using the fetch and FormData APIs
			let formData = new FormData();

			// Assume "image" is the name of the form field the server expects
			console.log({ uri, name: filename, type });
			setImage({ uri, name: filename, type });
			setPreview(uri);
		}
	};

	const handleSubmit = () => {
		let formData = new FormData();
		formData.append("file", {
			uri: image.uri,
			name: image.name,
			type: image.mimeType,
		});
		formData.append("title", title);
		formData.append("author", author);
		formData.append("GenreId", value);
		formData.append("condition", condition);
		formData.append("description", description);
		formData.append("PostId", postId);
		dispatch(actions.addBid(formData));
	};

	useEffect(() => {
		dispatch(actions.fetchGenres());
	}, []);

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
					<Text className="font-semibold">Book genre: </Text>
					<Dropdown
						className="w-full border-md border-1 px-4 border-gray-300 rounded-lg my-2"
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
					/>
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
									? { uri: preview }
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
			<TouchableOpacity
				className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center"
				onPress={handleSubmit}
			>
				<Text className="text-white font-bold uppercase tracking-wider">
					Post
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
