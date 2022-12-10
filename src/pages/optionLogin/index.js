import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Opening from "../assets/components/opening";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5"

function OpsiLogin(props) {
  return (
    <View style={styles.container}>
      <Opening style={styles.opening}></Opening>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("FormLoginPesilat")}
          style={styles.button}
        >
          <FontAwesomeIcon name="user" style={styles.icon}></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("FormLoginPesilat")}
          style={styles.button2}
        >
          <Icon name="user-tie" style={styles.icon2} />
        </TouchableOpacity>
      </View>
      <View style={styles.pesilatRow}>
        <Text style={styles.pesilat}>Pesilat</Text>
        <Text style={styles.pelatih}>Pelatih</Text>
      </View>
      <Text style={styles.loginSebagai}>Login Sebagai</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  opening: {
    width: 432,
    height: 510,
    marginTop: -198,
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(208,193,193,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 45,
    height: 50,
    width: 45,
    marginLeft: 34,
    marginTop: 30
  },
  button2: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(208,193,193,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
    flexDirection: "row",
    marginLeft: 68
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 50,
    width: 37,
    marginLeft: 33,
    marginTop: 29
  },
  buttonRow: {
    height: 100,
    flexDirection: "row",
    marginTop: 113,
    marginLeft: 57,
    marginRight: 50
  },
  pesilat: {
    fontFamily: "Inter-SemiBold",
    color: "#121212",
    fontSize: 17
  },
  pelatih: {
    fontFamily: "Inter-SemiBold",
    color: "#121212",
    fontSize: 17,
    marginLeft: 117
  },
  pesilatRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 80,
    marginRight: 71
  },
  loginSebagai: {
    fontFamily: "Inter-SemiBold",
    color: "#121212",
    fontSize: 17,
    marginTop: -187,
    alignSelf: "center"
  }
});
export default OpsiLogin;
