import {
	Text,
	View,
	Image,
	Button,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from "react-native-popup-menu";

export default function HeaderProfile({ user, navigation }) {

	let currentTab

	function switchTab() {

	}

	return (
		<>
			{/* <Menu className="rounded-circular border-1 px-1 py-1 h-5 w-5 mt-10 mx-8 self-end">
				<MenuTrigger>
					<Ionicons
						name="ellipsis-horizontal-outline"
						size="10"
					/>
				</MenuTrigger>
				<MenuOptions customStyles={{ optionsContainer: { width: 100 } }}>
					<MenuOption
						text="Edit Profile"
						onSelect={() => navigation.navigate("EditProfile", { user })}
					/>
					<MenuOption
						text="Report User"
						onSelect={() => navigation.navigate("EditProfile")}
					/>
				</MenuOptions>
			</Menu> */}
			<View className="gap-4">
				<View className="items-center">
					<View className="h-28 w-28 items-center rounded-circular border-2 border-dotted">
						<Image
							source={{
								uri: user.avatar,
							}}
							className="h-full w-full rounded-circular"
						></Image>
					</View>
					<View className="justify-around items-center mt-4">
						{/* <Text className="text-2xl font-bold">{user.fullname}</Text> */}
						<Text className="text-2xl font-bold">{user.fullname}</Text>
						<Text className="text-sm text-gray-400">{user.city}</Text>
					</View>
				</View>
			</View>
			<View className="flex-row justify-start mt-4">
				<TouchableOpacity>
					<Text className="text-left text-lg font-semibold mb-4 mr-8">
						Posts
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
