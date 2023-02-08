import { ScrollView, Text, FlatList } from "react-native";
import BidCard from "../components/BidCard";
import { useEffect } from "react";
import { fetchAllBidsByPost } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function BidList({ route, navigation }) {
	const { item } = route.params; // ini udah post ID
	const dispatch = useDispatch();
	const bids = useSelector((state) => {
		return state.bid.bidsByPost;
	});

	useEffect(() => {
		dispatch(fetchAllBidsByPost(item));
	}, []);

	let content;
	if (bids) {
		if (bids.length === 0) {
			content = (
				<Text className="my-auto mx-auto">
					There is no bid yet for this post.
				</Text>
			);
		} else {
			content = <Text>{JSON.stringify(bids)}</Text>;
		}
	}

	return (
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
