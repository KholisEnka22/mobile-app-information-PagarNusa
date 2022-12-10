import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5"
import { Calendar } from "react-native-calendars";

function Home(props) {



    return (
        <View style={styles.container}>
            <View style={styles.imageRow}>
                <Image
                    source={require("../assets/images/image.jpg")}
                    resizeMode="stretch"
                    style={styles.image}
                ></Image>
                <View style={styles.muhammadSamsulColumn}>
                    <Text style={styles.muhammadSamsul}>Muhammad Samsul</Text>
                    <Text style={styles.pesilat}>Pesilat</Text>
                </View>
            </View>
            <ScrollView horizontal style={styles.image2Row}>

                <Image
                    source={require("../assets/images/image.jpg")}
                    resizeMode="contain"
                    style={styles.image2}
                ></Image>
                <Image
                    source={require("../assets/images/image.jpg")}
                    resizeMode="contain"
                    style={styles.image3}
                ></Image>
                <Image
                    source={require("../assets/images/image.jpg")}
                    resizeMode="contain"
                    style={styles.image4}
                ></Image>
            </ScrollView>
            <ScrollView style={styles.rect}>
                <View >
                    <Text style={styles.mainMenu}>Main Menu</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate("Tagihan")}>
                            <FontAwesomeIcon
                                name="money"
                                style={styles.icon}>
                            </FontAwesomeIcon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
                            <Icon name="sitemap" style={styles.icon2} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button3}>
                            <FontAwesomeIcon
                                name="photo"
                                style={styles.icon3}
                            ></FontAwesomeIcon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button4}>
                            <IoniconsIcon name="md-person" style={styles.icon4}></IoniconsIcon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pembayaranRow}>
                        <Text style={styles.pembayaran}>Pembayaran</Text>
                        <Text style={styles.struktur}>Struktur</Text>
                        <Text style={styles.galeri}>Galeri</Text>
                        <Text style={styles.profil}>Profil</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("EventPages")}>
                        <Text style={styles.mainMenu}>Event</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.rect2}> */}
                    <Calendar style={styles.rect2} />
                    {/* </View> */}
                    <Text style={styles.berita}>Berita</Text>
                    <View style={styles.rect3}>
                        <View style={styles.image4StackStack}>
                            <View style={styles.image4Stack}>
                                <Image
                                    source={require("../assets/images/image.jpg")}
                                    resizeMode="contain"
                                    style={styles.image4}
                                ></Image>
                                <Text style={styles.loremIpsum3}>
                                    Lorem Ipsum is simply dummy text of the printing{"\n"}and
                                    typesetting industry. Lorem Ipsum has been{"\n"}the
                                    industry&#39;s standard dummy text ever since {"\n"}the 1500s,
                                    when an unknown printer took a{"\n"}galley of type and scrambled
                                    it to make a type {"\n"}specimen book.
                                </Text>
                            </View>
                            <Text style={styles.loremIpsum}>
                                Pencak Silat Satria Agung{"\n"}SMK Darut Taqwa{"\n"}Mendapatkan
                                Gelar Juara{"\n"}di Acara Unisda
                            </Text>
                        </View>
                        <View style={styles.image4StackStack}>
                            <View style={styles.image4Stack}>
                                <Image
                                    source={require("../assets/images/image.jpg")}
                                    resizeMode="contain"
                                    style={styles.image4}
                                ></Image>
                                <Text style={styles.loremIpsum3}>
                                    Lorem Ipsum is simply dummy text of the printing{"\n"}and
                                    typesetting industry. Lorem Ipsum has been{"\n"}the
                                    industry&#39;s standard dummy text ever since {"\n"}the 1500s,
                                    when an unknown printer took a{"\n"}galley of type and scrambled
                                    it to make a type {"\n"}specimen book.
                                </Text>
                            </View>
                            <Text style={styles.loremIpsum}>
                                Pencak Silat Satria Agung{"\n"}SMK Darut Taqwa{"\n"}Mendapatkan
                                Gelar Juara{"\n"}di Acara Unisda
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#293462"
    },
    image: {
        width: 74,
        height: 74,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "rgba(255,255,255,1)"
    },
    muhammadSamsul: {
        fontFamily: "Inter-SemiBold",
        color: "rgba(255,255,255,1)",
        fontSize: 19
    },
    pesilat: {
        fontFamily: "Inter-Regular",
        color: "rgba(255,255,255,1)",
        marginTop: 15
    },
    muhammadSamsulColumn: {
        marginLeft: 13,
        marginTop: 12
    },
    imageRow: {
        height: 74,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 23,
        marginRight: 118
    },
    image2: {
        width: 310,
        height: 183
    },
    image3: {
        width: 310,
        height: 183,
        marginLeft: 6
    },
    image4: {
        width: 310,
        height: 183,
        marginLeft: 6
    },
    loremIpsum: {
        top: 0,
        left: 107,
        position: "absolute",
        fontFamily: "Inter-SemiBold",
        color: "rgba(0,0,0,1)",
        fontSize: 12
    },
    loremIpsum3: {
        top: 60,
        left: 0,
        position: "absolute",
        fontFamily: "Inter-Regular",
        color: "rgba(0,0,0,1)",
        fontSize: 12
    },
    image2Row: {
        height: 350,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    rect: {
        width: 390,
        height: 1000,
        backgroundColor: "rgba(255,255,255,1)",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
        alignSelf: "center"
    },
    mainMenu: {
        fontFamily: "Inter-SemiBold",
        color: "#121212",
        fontSize: 18,
        marginTop: 20,
        marginLeft: 28
    },
    button: {
        width: 55,
        height: 55,
        backgroundColor: "#293462",
        borderRadius: 35,
    },
    icon: {
        color: "rgba(255,255,255,1)",
        fontSize: 25,
        height: 28,
        width: 30,
        marginTop: 15,
        marginLeft: 14
    },
    button2: {
        width: 55,
        height: 55,
        backgroundColor: "#293462",
        borderRadius: 35,
        marginLeft: 40
    },
    icon2: {
        fontSize: 24,
        color: "rgba(230, 230, 230,1)",
        height: 30,
        width: 34,
        marginTop: 14,
        marginLeft: 13
    },
    button3: {
        width: 55,
        height: 55,
        backgroundColor: "#293462",
        borderRadius: 35,
        marginLeft: 40
    },
    icon3: {
        color: "rgba(255,255,255,1)",
        fontSize: 25,
        height: 26,
        width: 28,
        marginTop: 14,
        marginLeft: 14
    },
    button4: {
        width: 55,
        height: 55,
        backgroundColor: "#293462",
        borderRadius: 35,
        marginLeft: 40
    },
    icon4: {
        color: "rgba(255,255,255,1)",
        fontSize: 26,
        height: 32,
        width: 28,
        marginTop: 13,
        marginLeft: 15
    },
    buttonRow: {
        height: 55,
        flexDirection: "row",
        marginTop: 9,
        marginLeft: 24,
    },
    pembayaran: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    struktur: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12,
        marginLeft: 44
    },
    galeri: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12,
        marginLeft: 60
    },
    profil: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12,
        marginLeft: 67
    },
    pembayaranRow: {
        height: 14,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 20,
        marginRight: 44
    },
    rect2: {
        width: 330,
        height: 317,
        // backgroundColor: "#E6E6E6",
        shadowColor: "rgba(154,120,120,1)",
        alignSelf: "center",
        shadowOffset: {
            height: 5,
            width: 5
        },
        borderRadius: 10,
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 24
    },
    berita: {
        fontFamily: "Inter-SemiBold",
        color: "#121212",
        fontSize: 18,
        marginTop: 20,
        marginLeft: 28
    },
    calendar: {
        width: 330,
        borderTopLeftRadius: 10,
        borderTopRightRadiusRadius: 10,
        alignSelf: "center",
        marginBottom: 10
    },
    rect3: {
        width: 330,
        // height: 400,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(154,120,120,1)",
        shadowOffset: {
            height: 5,
            width: 5
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
        marginTop: 24,
        marginBottom: 40,
        alignSelf: "center",
    },
    image4: {
        top: 0,
        left: 0,
        width: 102,
        height: 62,
        position: "absolute"
    },
    image4Stack: {
        top: 0,
        left: 0,
        width: 279,
        height: 150,
        position: "absolute"
    },
    image4StackStack: {
        width: 279,
        height: 150,
        marginTop: 14,
        marginLeft: 15
    }
});

export default Home;