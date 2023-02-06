import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/LandingPage";
import Main from "./src/components/Main";
import Register from "./src/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "./src/screens/EditProfile";
import Login from "./src/screens/Login";
import { MenuProvider } from "react-native-popup-menu";
import PostDetail from "./src/components/PostDetail";
import SearchModal from "./src/modals/SearchModal";
import AddPost from "./src/modals/AddPost";
import AddBid from "./src/modals/AddBid";
import BidList from "./src/screens/BidList";
import Map from "./src/screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <Map />
		// <Register />
		// <LandingPage />
		// <Login />
		<MenuProvider>
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen
						name="Main"
						component={Main}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="EditProfile"
						component={EditProfile}
						options={{ title: "Edit Profile" }}
					/>

					<Stack.Screen
						name="PostDetail"
						component={PostDetail}
						options={{ title: "Post Detail" }}
					/>
					<Stack.Screen
						name="AddPost"
						component={AddPost}
						options={{ title: "Add New Post", presentation: "modal" }}
					/>
					<Stack.Screen
						name="AddBid"
						component={AddBid}
						options={{ title: "Add New Bid", presentation: "modal" }}
					/>
					<Stack.Screen
						name="BidList"
						component={BidList}
						options={{ title: "Bid List" }}
					/> */}
					<Stack.Screen
						name="Register"
						component={Register}
						options={{ }}
					/>
          		<Stack.Screen
						name="Map"
						component={Map}
						options={{ }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</MenuProvider>
	);
}
