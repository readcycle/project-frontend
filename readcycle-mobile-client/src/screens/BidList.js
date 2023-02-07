import { ScrollView, Text, FlatList } from "react-native";
import BidCard from "../components/BidCard";
import { useEffect } from "react";
import { fetchAllBids } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function BidList({ route, navigation }) {
	const { item } = route.params; // ini udah post ID
	const dispatch = useDispatch();
	const { bids } = useSelector((state) => state.bid);

	useEffect(() => {
		console.log(item);
		dispatch(fetchAllBids(item));
		console.log(bids);
	}, []);
	// ini tuh item post atau bid
	// coba pake postman dh, bids?post=

	return (
		// <Text>{JSON.stringify(bids)}</Text>
		<FlatList
			contentContainerStyle={styles.wrapper}
			className="w-screen px-4 py-4"
			data={bids}
			renderItem={({ item }) => {
				return (
					<BidCard
						navigation={navigation}
						item={item}
					/>
				);
			}}
			keyExtractor={(item) => item.id}
		></FlatList>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		// alignItems: "center",
	},
};
