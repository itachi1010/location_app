import React from "react";
import { Button, Alert, Share } from "react-native";

const ShareButton = ({ location }) => {
    const shareLocation = async () => {
        try {
            const result = await Share.share({
                message: `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log("shared with activity type of ", result.activityType);
                } else {
                    console.log("shared");
                }
            } else if (result.action === Share.dismissedAction) {
                console.log("dismissed");
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong while sharing location");
        }
    };

    return <Button title="Share Location" onPress={shareLocation} />;
};

export default ShareButton;
