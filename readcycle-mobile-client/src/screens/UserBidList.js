import { ScrollView, Text, FlatList } from "react-native";
import BidCard from "../components/BidCard";
import PostCard from '../components/PostCard'
import { useEffect } from "react";
import { fetchAllBids } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/action/actionCreator";

export default function UserBidList({ route, navigation }) {
	//terima user ID
	// const dispatch = useDispatch();

	// const { bids } = useSelector((state) => {
    //     console.log(state)
	// 	return state.bid.bidsById;
	// });
	const { user } = route.params;
    const posts = user.Bids.map(el => {
        return el.Post
    })
	// useEffect(() => {
	// 	dispatch(actions.fetchBidsById(user.id));
	// }, []);
	return (
		// <Text>{JSON.stringify(bids)}</Text>
		// <Text className="my-auto mx-auto">{JSON.stringify(posts)}</Text>
        <FlatList
        contentContainerStyle={styles.wrapper}
        className="w-screen px-4 py-4"
        data={posts}
        renderItem={({ item }) => {
            return (
                <PostCard
                    navigation={navigation}
                    item={item}
                    prevPage="UserBidList"
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
