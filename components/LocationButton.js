import React from "react";
import { Button, Linking } from "react-native";

const LocationButton = ({ location }) => {
    return (
        <Button
            onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`)}
            title="Open in Google Maps"
        />
    );
};

export default LocationButton;
