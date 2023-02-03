import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/LandingPage";
import Tabs from "./src/components/Tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
        <Tabs />



				{/* <LandingPage />
			<View className="my-auto mx-auto">
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />
			</View> */}
			</NavigationContainer>
		</>
	);
}
