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
import AddPost from "./src/modals/AddPost";
import AddBid from "./src/modals/AddBid";
import Home from "./src/screens/Home";
import NotificationScreen from "./src/screens/NotificationScreen";
import BidList from "./src/screens/BidList";
import AddReport from "./src/modals/AddReport";
import UserBidList from "./src/screens/UserBidList";
import BidDetail from "./src/modals/BidDetail";
import Map from "./src/screens/Map";
// import Messages from "./src/screens/Messages";
// import Chats from "./src/screens/Chats";
import Profile from "./src/screens/Profile";
import OtherProfile from "./src/screens/OtherProfile";
import { Provider } from "react-redux";
import store from "./src/store/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();
let token;
AsyncStorage.getItem("access_token").then((data) => (token = data));

export default function App() {
	return (
		// <Map />
		// <LandingPage />
		// <Login />
		<Provider store={store}>
			<MenuProvider>
				<RootSiblingParent>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								name="Login"
								component={Login}
								options={{ title: "" }}
							/>
							<Stack.Screen
								name="Home"
								component={Home}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="NotificationScreen"
								component={NotificationScreen}
								options={{ title: "Notification" }}
							/>
							<Stack.Screen
								name="AddReport"
								component={AddReport}
								options={{ title: "File New Report", presentation: "modal" }}
							/>
							<Stack.Screen
								name="BidDetail"
								component={BidDetail}
								options={{ title: "Offer Detail", presentation: "modal" }}
							/>
							<Stack.Screen
								name="Register"
								component={Register}
								options={{ title: "Create New Account" }}
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
								options={{ title: "Book Trade Offers" }}
							/>
							<Stack.Screen
								name="Profile"
								component={Profile}
								options={{}}
							/>
							<Stack.Screen
								name="Map"
								component={Map}
								options={{ title: "Pinpoint Your Location" }}
							/>
							<Stack.Screen
								name="UserBidList"
								component={UserBidList}
								options={{ title: "Your Trade Offers" }}
							/>
							{/* <Stack.Screen
								name="Chats"
								component={Chats}
								options={{ title: "" }}
							/> */}
							<Stack.Screen
								name="OtherProfile"
								component={OtherProfile}
								options={{ title: "" }}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</RootSiblingParent>
			</MenuProvider>
		</Provider>
	);
}
