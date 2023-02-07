import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	Button,
} from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";
import * as FileSystem from "expo-file-system";
// import {imageKit} from '../helper/imagekit'

export default function Register({ route, navigation }) {
	// console.log(route.params.location);
	const dispatch = useDispatch();

	const [avatar, setAvatar] = useState(null);
	const [image, setImage] = useState({});
	const [page, setPage] = useState(1);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [city, setCity] = useState(null);

	// if (route.params) {
	// 	setLocation(route.params.location);
	// }

	function registerHandler() {
		// imageKit.upload(
		// 	{
		// 		file: image,
		// 		fileName: Date.now() + "-" + ".png",
		// 		folder: "images_posts",
		// 	},
		// 	(err, response) => {
		// 		if (err) throw { name: "image_not_found" };
		// 		const imageUrl = imageKit.url({
		// 			src: response.url,
		// 			transformation: [
		// 				{
		// 					quality: "80",
		// 					format: "png",
		// 					focus: "auto",
		// 				},
		// 			],
		// 		});
		// 		console.log(imageUrl);
		// 	}
		// );
		// dispatch(actions.registerUser())
		// .then(() => navigate("Login"))
		// .catch((error) => console.log(error));
	}

	// "location": {"latitude": 37.78825, "longitude": -122.4324}

	const handleChoosePhoto = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log({ uri: result.assets[0].uri, result:result.assets[0] });
		if (!result.canceled) {
			// console.log(result.assets[0]);
			// setImage(result.assets[0].base64);
			setImage({});
			setAvatar(result.assets[0].uri);
		}
	};

	// useEffect(() => {
	// 	// if(route.params) {
	// 	// 	setLocation(route.params.location)
	// 	// }
	// 	// console.log(route.params.location)
	// 	// setLoading(true)
	// 	// 	.then(() => dispatch(actions.fetchGenres()))
	// 	// 	.then(() => setLoading(false));
	// }, []);

	let textLocation;

	// if (route.params) {
	// 	textLocation = route.params.registerLocation;
	// } else {
	// 	textLocation = "";
	// }

	let formPage;

	if (page === 1) {
		formPage = (
			<View>
				<View className="mt-16">
					<View className="mt-6">
						<Text className="font-semibold">Full name: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="Full name"
							onChangeText={(input) => setName(input)}
						></TextInput>
					</View>
					<View className="mt-6">
						<Text className="font-semibold">Email: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="Email"
							onChangeText={(input) => setEmail(input)}
						></TextInput>
					</View>
					<View className="mt-6">
						<Text className="font-semibold">Password: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="Password"
							onChangeText={(input) => setPassword(input)}
						></TextInput>
					</View>
					<View className="mt-6">
						<Text className="font-semibold">City: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="City"
							onChangeText={(input) => setCity(input)}
						></TextInput>
					</View>
					{/* <View className="mt-2 items-center">
			<Text className="font-semibold w-1/2">Pinpoint your location: </Text>
			<TouchableOpacity
				className="mt-4 border-1 border-navy px-2 py-1 w-1/2"
				onPress={() => {
					navigation.push("Map");
				}}
			>
				<Text className="text-center">Set Location</Text>
			</TouchableOpacity>
		</View>
		<View className="mt-8 mx-auto items-center">
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
			<TouchableOpacity
				className="mt-4 border-1 border-navy px-2 py-1"
				onPress={handleChoosePhoto}
			>
				<Text>Choose picture</Text>
			</TouchableOpacity>
		</View>
		<TouchableOpacity
			className="mt-4 border-1 border-navy px-2 py-1"
			onPress={() => {
				navigation.push("Map");
			}}
		>
			<Text>Set Location</Text>
		</TouchableOpacity> */}

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
					className="w-1/3 mt-20 bg-navy rounded-circular py-3 px-2 items-center self-center"
					onPress={() => setPage(2)}
				>
					<Text className="text-white font-bold uppercase tracking-wider">
						Next
					</Text>
				</TouchableOpacity>
			</View>
		);
	} else {
		formPage = (
			<View className="mt-10 items-center">
				<Text className="font-semibold w-1/2">Pinpoint your location: </Text>
				<View className="items-center">
					<TouchableOpacity
						className="mt-4 border-1 border-navy px-2 py-1 w-1/2"
						onPress={() => {
							navigation.push("Map");
						}}
					>
						<Text className="text-center">Set Location</Text>
					</TouchableOpacity>
					{/* {route.params && ( */}
					<Text className="text-xs w-1/3 text-center mt-4">
						You have pinpointed your location ✅
					</Text>
					{/* )} */}
				</View>
				<View className="mt-12 mx-auto items-center">
					<Text className="font-semibold">
						Finally, upload a profile picture
					</Text>
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted mt-4">
						<Image
							source={
								image
									? { uri: avatar }
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
				<TouchableOpacity
					onPress={registerHandler}
					className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center"
				>
					<Text className="text-white font-bold uppercase tracking-wider">
						Create Account
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="mt-32 items-start w-full"
					onPress={() => {
						setPage(1);
					}}
				>
					<Text>Previous page</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<ScrollView className="mx-auto px-8 w-screen">
			<View className="w-full">
				<Text className="font-bold text-2xl tracking-wider text-center text-navy mt-10">
					Get Started with Readcycle
				</Text>
			</View>
			{formPage}
			{/* <TouchableOpacity className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center">
				<Text className="text-white font-bold uppercase tracking-wider">
					Create Account
				</Text>
			</TouchableOpacity> */}
		</ScrollView>
	);
}
