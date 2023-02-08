import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, Callout, Circle } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

export default function Map({ route, navigation }) {
	const [location, setLocation] = useState();

	const [pin, setPin] = useState({
		latitude: location ? location.coords.latitude : -6.1751,
		longitude: location ? location.coords.longitude : 106.865,
	});

	let user = {};
	if (route.params.user) {
		user = route.params.user;
	}

	const { targetPage } = route.params;
	useEffect(() => {
		const getPermission = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMessage("Permission to access location was denied");
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			setPin({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});
		};
		getPermission();
	}, []);

	return (
		<View style={styles.container}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance",
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details);
					setPin({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					});
				}}
				query={{
					key: "AIzaSyAC8rofhO65aVlXsbHpr8V48efHA4Dzbb0",
					language: "en",
					// components: "country: id",
					types: "establishment",
					radius: 30000,
					location: `${pin.latitude}, ${pin.longitude}`,
				}}
				styles={{
					container: {
						flex: 0,
						position: "absolute",
						width: "100%",
						zIndex: 1,
					},
					listView: { backgroundColor: "white" },
				}}
			/>
			{location && (
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: pin.latitude,
						longitude: pin.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					provider="google"
				>
					<Marker
						coordinate={pin}
						draggable={true}
						onDragStart={(e) => {
							// console.log("Drag start", e.nativeEvent.coordinates);
						}}
						onDragEnd={(e) => {
							setPin({
								latitude: e.nativeEvent.coordinate.latitude,
								longitude: e.nativeEvent.coordinate.longitude,
							});
						}}
					>
						<Callout
							onPress={() => {
								// submitLocation();
								navigation.navigate(targetPage, { location: pin, user });
								// navigation.goBack({
								// 	location: pin,
								// });
							}}
						>
							<Text>Set Location</Text>
						</Callout>
					</Marker>
					<Circle
						center={pin}
						radius={1000}
					/>
				</MapView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
