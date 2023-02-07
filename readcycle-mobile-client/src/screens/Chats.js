import { View, ScrollView, Text, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useEffect, useState, useCallback } from "react";

export default function Chats() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<>
			{/* <View className="w-full flex-row px-8 py-2 border-b-1 border-navy items-center">
				<View className="h-10 w-10">
					<Image
						source={require("../../assets/portrait-example.jpg")}
						className="h-full w-full rounded-circular"
					></Image>
				</View>
				<Text className="text-lg ml-20">Chris Pratt</Text>
			</View> */}
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		</>
	);
}
