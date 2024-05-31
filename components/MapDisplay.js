import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapDisplay = ({ location }) => {
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        height: 200,
        width: "100%",
        marginBottom: 20,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapDisplay;
