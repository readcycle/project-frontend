import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/actionCreator";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	function loginHandler() {
		console.log(email, password);
		dispatch(actions.loginUser({ email, password }))
			.then((data) => navigation.navigate("Home"))
			.catch((error) => console.log(error));
	}

	return (
		<KeyboardAvoidingView
			className="px-8 justify-start h-full items-center"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View className="w-full justify-center items-center">
				<Image
					source={require("../../assets/landing-page-illustration-2.jpg")}
					className="h-1/2 w-full object-contain"
				/>
				<View className="mt-10 items-center">
					<Text className="text-3xl text-navy font-bold tracking-widest">
						Login Now
					</Text>
					<Text className="text-xs text-gray-400 mt-1">
						Please enter the details below to continue
					</Text>
				</View>
			</View>
			<View className="w-full gap-4">
				<TextInput
					className="w-full bg-gray-100 py-4 px-4 rounded-lg text-gray-800 border-1 border-gray-400"
					onChangeText={(input) => setEmail(input)}
					autoCapitalize="none"
					placeholder="Email"
				></TextInput>
				<TextInput
					className="w-full bg-gray-100 py-4 px-4 rounded-lg text-gray-800 border-1 border-gray-400"
					onChangeText={(input) => setPassword(input)}
					autoCapitalize="none"
					placeholder="Password"
					secureTextEntry={true}
				></TextInput>
				<TouchableOpacity
					className="w-full bg-navy rounded-circular py-5 px-4 items-center"
					onPress={() => {
						loginHandler();
						navigation.navigate("Home");
					}}
				>
					<Text className="text-white font-bold uppercase tracking-wider">
						Login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="w-full items-center"
					onPress={()=>navigation.navigate("Register")}
				>
					<Text className="text-gray-800 text-xs underline">
						or create an account here
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		alignItems: "center",
		height: "100%",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
	},
};
