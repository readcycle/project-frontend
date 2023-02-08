import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";
import * as DocumentPicker from "expo-document-picker";

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
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [favoriteBook, setFavoriteBook] = useState(null);
	const [favoriteGenre, setFavoriteGenre] = useState(null);

	let location;
	if (route.params) {
		location = route.params.location;
	}

	function registerHandler() {
		console.log(image);
		// const { longitude, latitude } = route.params.location;
		let formData = new FormData();
		formData.append("file", {
			uri: image.uri,
			name: image.name,
			type: image.mimeType,
		});
		formData.append("fullname", name);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("city", city);
		formData.append("phoneNumber", phoneNumber);

		dispatch(actions.registerUser(formData))
		navigation.navigate('Login');
		
	}

	async function selectFile() {
		try {
			const result = await DocumentPicker.getDocumentAsync({
				copyToCacheDirectory: false,
				type: "image/*",
			});

			if (result.type === "success") {
				// Printing the log realted to the file
				console.log("res : " + JSON.stringify(result));
				// Setting the state to show single file attributes
				setImage(result);
			}
			//   }
		} catch (err) {
			setImage(null);
			console.warn(err);
			return false;
		}
	}

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

	let formPage;

	if (page === 1) {
		formPage = (
			<View className="">
				<View className="mt-10">
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
							autoCapitalize={false}
							onChangeText={(input) => setEmail(input)}
						></TextInput>
					</View>
					<View className="mt-6">
						<Text className="font-semibold">Password: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="Password"
							autoCapitalize={false}
							secureTextEntry={true}
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
					<View className="mt-6">
						<Text className="font-semibold">Phone Number: </Text>
						<TextInput
							className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
							placeholder="phoneNumber"
							inputMode="number-pad"
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
					className="w-1/3 mt-10 bg-navy rounded-circular py-3 px-2 items-center self-center"
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
			<View className="mt-20 items-center">
				<Text className="font-semibold w-1/2">Pinpoint your location: </Text>
				<View className="items-center">
					<TouchableOpacity
						className="mt-4 border-1 border-navy px-2 py-1 w-1/2"
						onPress={() => {
							navigation.navigate("Map", { targetPage: "Register" });
						}}
					>
						<Text className="text-center">Set Location</Text>
					</TouchableOpacity>

					{location ? (
						<Text className="text-xs w-1/3 text-center mt-4">
							You have pinpointed your location ✅
						</Text>
					) : (
						""
					)}

					{/* {route.params.navigation && (
						<Text className="text-xs w-1/3 text-center mt-4">
							You have pinpointed your location ✅
						</Text>
					)} */}
				</View>
				<View className="mt-32 mx-auto items-center">
					<Text className="font-semibold">
						Finally, upload a profile picture
					</Text>
					{/* <View className="h-28 w-28 items-center rounded-circular border-2 border-dotted mt-4">
						<Image
							source={
								image
									? { uri: avatar }
									: require("../../assets/portrait-example.jpg")
							}
							className="h-full w-full rounded-circular"
						/>
					</View> */}

					<TouchableOpacity
						className="mt-4 border-1 border-navy px-2 py-1"
						onPress={selectFile}
					>
						<Text>Choose picture</Text>
					</TouchableOpacity>

					{image != null ? (
						<Text>File Name: {image.name ? image.name : ""}</Text>
					) : null}
				</View>
				<TouchableOpacity
					onPress={registerHandler}
					className="w-full mt-40 bg-navy rounded-circular py-5 px-4 items-center"
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
		<KeyboardAvoidingView
			className="mx-auto px-8 h-screen w-screen pb-10"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
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
		</KeyboardAvoidingView>
	);
}
