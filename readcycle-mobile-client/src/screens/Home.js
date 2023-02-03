import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TextInput,
	FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PostCard from "../components/PostCard";
import Profile from "./EditProfile";


export default function Home() {
	const data = {
		a: "b",
	};
	return (
		<View className="items-center h-screen w-full justify-start mt-10">
			<View className="h-20 w-full flex-row justify-start items-center px-8">
				<View className="h-14 w-14">
					<Image
						source={require("../../assets/portrait-example.jpg")}
						className="h-full w-full rounded-circular"
					></Image>
				</View>
			</View>
			<View className="w-full my-8">
				<Text className="text-left text-2xl px-8 font-bold">Hello, User!</Text>
			</View>
			<View className="flex-row items-center bg-gray-100 w-4/5 h-12 rounded-circular px-4">
				<Ionicons
					name="search-outline"
					color="gray"
					size="16"
				></Ionicons>
				<TextInput className="text-gray-400 ml-4">Search books</TextInput>
			</View>
			<View className="w-full mt-10 px-8">
				<Text className="text-left text-lg font-semibold">Books Near You</Text>
			</View>
			<View className="w-full mt-4 px-8 flex-row">
				<PostCard />
				<PostCard />
			</View>
            
		</View>
	);
}
