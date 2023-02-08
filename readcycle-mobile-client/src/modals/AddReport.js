import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from "../store/action/actionCreator";
import { useSelector, useDispatch } from "react-redux";

export default function AddReport({ route, navigation }) {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [id, setId] = useState();
	useEffect(() => {
		AsyncStorage.getItem("id").then((data) => {
			setId(data);
		});
	});

	const { userId } = route.params;
	const dispatch = useDispatch();
	function handleSubmit() {
		dispatch(actions.addReport({ title, content:description }, userId));
        navigation.navigate('Home')
	}

	return (
		<ScrollView className="mx-auto px-8 w-screen">
			<View className="mt-8">
				<View className="mt-2">
					<Text className="font-semibold">Subject: </Text>
					<TextInput
						className="my-2 h-10 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Report subject (ex: Verbal Harassment)"
						onChangeText={(input) => setTitle(input)}
					></TextInput>
				</View>
				<View className="mt-2">
					<Text className="font-semibold">Report detail: </Text>
					<TextInput
						multiline={true}
						numberOfLines={4}
						className="my-2 h-20 px-4 rounded-lg border-gray-300 border-1"
						placeholder="Report detail"
						onChangeText={(input) => setDescription(input)}
					></TextInput>
				</View>
			</View>
			<TouchableOpacity
				className="w-full mt-10 bg-navy rounded-circular py-5 px-4 items-center"
				onPress={handleSubmit}
			>
				<Text className="text-white font-bold uppercase tracking-wider">
					Send Report
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
