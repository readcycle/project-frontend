import {
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	Modal,
    TextInput
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";

const renderLabel = () => {
    if (value || isFocus) {
        return (
            <Text style={[styles.label, isFocus && { color: "blue" }]}>
                Select Genre
            </Text>
        );
    }
    return null;
};

export default function SearchModal({modalVisible}) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
		>
			<View style={styles.centeredView}>
				<View
					style={styles.modalView}
					className="w-4/5"
				>
					<Text style={styles.modalText}>Search Book</Text>
					<View className="flex-row items-center w-full bg-gray-100 rounded-circular py-2 px-2">
						<Ionicons
							name="search-outline"
							color="gray"
							size="16"
						></Ionicons>
						<TouchableOpacity
							onPress={() => {
								setModalVisible(true);
							}}
						>
							<TextInput className="text-gray-400 ml-4">
								Search by title
							</TextInput>
						</TouchableOpacity>
					</View>
					<View className="flex-row w-full b justify-between items-center mt-4 px-2">
						{renderLabel()}
						<Dropdown
							className="w-1/2 border-md"
							data={data}
							maxHeight={200}
							maxWidth={800}
							itemTextStyle={{ fontSize: "14px" }}
							selectedTextStyle={{ fontSize: "14px" }}
							labelField="label"
							valueField="value"
							value={value}
							onChange={(item) => {
								setValue(item.value);
							}}
							// renderLeftIcon={() => (
							// 	<AntDesign
							// 		style={styles.icon}
							// 		color={isFocus ? "blue" : "black"}
							// 		name="Safety"
							// 		size={20}
							// 	/>
							// )}
						/>
					</View>
					<View className="flex-row justify-around w-full">
						<Pressable
							className="py-2 px-4 bg-navy rounded-xl mt-6"
							onPress={() => setModalVisible(false)}
						>
							<Text style={styles.textStyle}>Search</Text>
						</Pressable>
						<Pressable
							className="py-2 px-4 bg-white border-1 border-navy rounded-xl mt-6"
							onPress={() => {
								setModalVisible(false);
								setValue("");
							}}
						>
							<Text className="text-navy font-bold">Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = {
	wrapper: {
		justifyContent: "start",
		alignItems: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
};
