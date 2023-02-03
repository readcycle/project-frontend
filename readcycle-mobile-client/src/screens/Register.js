import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Register() {
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
				<View className="mt-2">
					<Text className="font-semibold">Phone Number: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Phone number"
					></TextInput>
				</View>
			</View>
			<TouchableOpacity className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center">
				<Text className="text-white font-bold uppercase tracking-wider">
					Create Account
				</Text>
			</TouchableOpacity>
		</View>
	);
}
