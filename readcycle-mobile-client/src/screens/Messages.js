// import { useLayoutEffect, useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // import MessageComponent from "../components/MessageComponent";
// // import { styles } from "../../assets/style";
// // import socket from "../../assets/socket";
// import { useDispatch, useSelector } from "react-redux";
// import { createMessage, fetchMessage } from "../store/action/actionCreator";
// import { useFocusEffect } from "@react-navigation/native";

const Messages = ({ route, navigation }) => {
	// const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState("");
	// const [senderId, setSenderId] = useState("");
	const { chatId, curentUserId } = route.params;

	// const dispatch = useDispatch();
	// const messages = useSelector((state) => state.messages);
	// console.log(messages, "<<<< from screen messaging");

	// const handleNewMessage = () => {
	// const hour =
	//     new Date().getHours() < 10
	//         ? `0${new Date().getHours()}`
	//         : `${new Date().getHours()}`;

	// const mins =
	//     new Date().getMinutes() < 10
	//         ? `0${new Date().getMinutes()}`
	//         : `${new Date().getMinutes()}`;

	// if (chatId) {
	// socket.emit("newMessage", {
	//     chatId
	//     senderId,
	//     message
	// });
	// dispatch(createMessage({ chatId, senderId: curentUserId, message }));
	// 	}
	// };

	// useLayoutEffect(() => {
	//     dispatch(fetchMessage(chatId))
	// }, [])

	// useFocusEffect(() => {
	// 	dispatch(fetchMessage(chatId));
	// });

	// useEffect(() => {

	// }, [])

	return (
		// <View style={styles.messagingscreen}>
		//     <View
		//         style={[
		//             styles.messagingscreen,
		//             { paddingVertical: 15, paddingHorizontal: 10 },
		//         ]}
		//     >
		//         {messages[0] ? (
		//             <FlatList
		//                 data={messages}
		//                 renderItem={({ item }) => (
		//                     <MessageComponent item={item} curentUserId={curentUserId} />
		//                 )}
		//                 keyExtractor={(item) => item._id}
		//             />
		//         ) : (
		//             ""
		//         )}
		//     </View>

		//     <View style={styles.inputContainer}>
		//         <TextInput
		//             style={styles.messaginginput}
		//             onChangeText={(value) => setMessage(value)}
		//         />
		//         <Pressable
		//             style={styles.buttonContainer}
		//             onPress={handleNewMessage}
		//         >
		//             <View>
		//                 <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
		//             </View>
		//         </Pressable>
		//     </View>
		// </View>
		<Text>messages</Text>
	);
};

export default Messages;
