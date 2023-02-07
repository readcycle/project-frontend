import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import MsgCard from "../components/MsgCard";

export default function Messages({ navigation }) {
	return (
		<ScrollView className="py-8">
			<MsgCard navigation={navigation} />
			<MsgCard />
			<MsgCard />
			<MsgCard />
		</ScrollView>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		alignItems: "start",
	},
};
