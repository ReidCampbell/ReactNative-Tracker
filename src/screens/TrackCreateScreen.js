import "../_mockLocation";

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
