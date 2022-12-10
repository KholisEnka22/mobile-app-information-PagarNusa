import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Cardnama(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.image1Row}>
          <Image
            source={require("../images/image.jpg")}
            resizeMode="stretch"
            style={styles.image1}
          ></Image>
          <View style={styles.muhammadSamsul2Column}>
            <Text style={styles.muhammadSamsul2}>Muhammad Samsul</Text>
            <Text style={styles.pesilat1}>Pesilat</Text>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.rayonRow}>
            <Text style={styles.rayon}>Rayon</Text>
            <Text style={styles.garis}>|</Text>
            <Text style={styles.pacSukorejo}>PAC.Sukorejo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 346,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25
  },
  image1: {
    width: 74,
    height: 74,
    borderRadius: 50
  },
  muhammadSamsul2: {
    fontFamily: "inter-600",
    color: "#293462",
    fontSize: 17
  },
  pesilat1: {
    fontFamily: "inter-regular",
    color: "rgba(41,52,98,1)",
    marginTop: 9
  },
  muhammadSamsul2Column: {
    width: 161,
    marginLeft: 2,
    marginTop: 15,
    marginBottom: 13
  },
  image1Row: {
    height: 74,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 17,
    marginRight: 92
  },
  rect2: {
    width: 184,
    height: 26,
    backgroundColor: "rgba(217,217,217,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    flexDirection: "row",
    marginLeft: 93
  },
  rayon: {
    fontFamily: "inter-regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13
  },
  garis: {
    fontFamily: "inter-regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13,
    marginLeft: 28
  },
  pacSukorejo: {
    fontFamily: "inter-regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13,
    marginLeft: 9
  },
  rayonRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 12,
    marginTop: 4
  }
});

export default Cardnama;
