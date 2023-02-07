import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";

export default function Login({navigation}) {
	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

	console.log(email, password);

	return (
		<View className="justify-start h-full px-8 pt-20">
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
					className="w-full bg-gray-100 py-4 px-4 rounded-lg text-gray-800"
					onChangeText={(input) => setEmail(input)}
				>
					Email
				</TextInput>
				<TextInput
					className="w-full bg-gray-100 py-4 px-4 rounded-lg text-gray-800"
					onChangeText={(input) => setPassword(input)}
				>
					Password
				</TextInput>
				<TouchableOpacity className="w-full bg-navy rounded-circular py-5 px-4 items-center">
					<Text className="text-white font-bold uppercase tracking-wider">
						Login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity className="w-full items-center" onPress={navigation.navigate('Register')}>
					<Text className="text-gray-800 text-xs underline">
						or create an account here
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
