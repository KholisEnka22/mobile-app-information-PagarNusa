import React, { Component, useState } from "react";
import { View, StyleSheet } from "react-native";
import AgendaScreen from "../assets/components/calender";

function EventPages(props) {
    return (
        <View style={styles.container}>
            <AgendaScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#293462"
    },
});
export default EventPages;