import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function MsgCard({ navigation }) {
	return (
		<TouchableOpacity
			className="w-screen flex-row px-8 py-2 my-4"
			onPress={() => {navigation.navigate('Chats')}}
		>
			<View className="h-16 w-16">
				<Image
					source={require("../../assets/portrait-example.jpg")}
					className="h-full w-full rounded-circular"
				></Image>
			</View>
			<View className="items-start ml-4 w-auto">
				<Text className="font-bold">Chris Pratt</Text>
				<Text className="mt-2">Hello, is this still available?</Text>
			</View>
		</TouchableOpacity>
	);
}
