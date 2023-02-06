import { ScrollView } from "react-native";
import PostCard from "../components/PostCard";

export default function BidList() {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} className="w-screen px-4 py-4">
			<PostCard />
            <PostCard />
            <PostCard />
		</ScrollView>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		alignItems: "center",
	},
};
