import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as actions from "../store/action/actionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NotificationCard from "../components/NotificationCard";

export default function NotificationScreen({ navigation }) {
	const dispatch = useDispatch();
	const [id, setId] = useState();

	const { bids } = useSelector((state) => {
		return state.bid;
	});

	useEffect(() => {
		dispatch(actions.fetchAllBids()); 
	}, []);

	const myBids = bids.filter((el) => {
		return el.Post.UserId === 4; //hardcode buat dummy, harusnya !== id
	});

	let content;

	if (myBids.length === 0) {
		content = (
			<Text className="mx-auto my-auto">You have no notifications.</Text>
		);
	} else {
		content = (
			<FlatList
				className="mx-8 my-2"
				data={myBids}
				renderItem={({ item }) => {
					return (
						<NotificationCard
							navigation={navigation}
							item={item}
						/> // ngirim bid
					);
				}}
				keyExtractor={(item) => item.id}
			></FlatList>
		);
	}

	return content;
}
