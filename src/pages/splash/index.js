import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import OpsiLogin from "../optionLogin";

const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/sa.png")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.pagarNusa}>Pagar Nusa</Text>
            <Text style={styles.satriaAgung}>SATRIA AGUNG</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("OpsiLogin")}
                style={styles.button}
            >
                <Text style={styles.getStarted}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.loremIpsum}>Powered by:Pagar Nusa Satria Agung</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 200,
        height: 259,
        marginTop: 209,
        alignSelf: "center"
    },
    pagarNusa: {
        fontFamily: "Inter-Bold",
        color: "#121212",
        fontSize: 20,
        letterSpacing: 7.5,
        marginTop: 22,
        alignSelf: "center"
    },
    satriaAgung: {
        fontFamily: "Inter-Bold",
        color: "#121212",
        fontSize: 26,
        letterSpacing: 7.5,
        alignSelf: "center"
    },
    button: {
        width: 303,
        height: 51,
        backgroundColor: "rgba(221,227,227,1)",
        borderRadius: 10,
        shadowColor: "rgba(190,173,173,1)",
        shadowOffset: {
        width: 4,
        height: 4
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 144,
        alignSelf: "center"
    },
    getStarted: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 20,
        marginTop: 14,
        alignSelf: "center"
    },
    loremIpsum: {
        fontFamily: "Inter-Regular",
        color: "rgba(103,100,100,1)",
        fontSize: 12,
        marginTop: 14,
        alignSelf: "center"
    }
});

export default Splash;