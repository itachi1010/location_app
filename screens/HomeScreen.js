import React, { useEffect, useState } from "react";
import LocationButton from "../components/LocationButton";
import ShareButton from "../components/ShareButton";
import LoadingIndicator from "../components/LoadingIndicator";
import { fetchLocation } from "../utils/location";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        const loc = await fetchLocation();
        setLocation(loc);
    };

    useEffect(() => {
        getLocation();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the location app</Text>
            <Text style={styles.heading2}>Location Sharing App</Text>
            {location ? (
                <View>
                    <Text style={styles.text1}>Latitude: {location.latitude}</Text>
                    <Text style={styles.text1}>Longitude: {location.longitude}</Text>
                    <LocationButton location={location} />
                </View>
            ) : (
                <LoadingIndicator />
            )}
            <Button title="Update Location" onPress={() => getLocation()} />
            <ShareButton location={location} />
            <Button
                title="Show Map"
                onPress={() => navigation.navigate('Map', { location })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "green",
        textAlign: "center",
    },
    heading2: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
        textAlign: "center",
    },
    text1: {
        fontSize: 16,
        marginBottom: 10,
        color: "black",
        fontWeight: "bold",
    },
});
