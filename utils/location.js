import * as Location from "expo-location";
import { Alert } from "react-native";

export const fetchLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Permission Denied", "Location permission is required to fetch the location.");
            return null;
        }
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        return { latitude, longitude };
    } catch (error) {
        Alert.alert("Error", "Could not fetch location. Please try again.");
        return null;
    }
};
