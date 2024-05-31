import React from "react";
import { View, StyleSheet } from "react-native";
import MapDisplay from "../components/MapDisplay";

export default function MapScreen({ route }) {
    const { location } = route.params;

    return (
        <View style={styles.container}>
            <MapDisplay location={location} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
