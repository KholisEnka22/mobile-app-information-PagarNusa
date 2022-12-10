import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Opening from "../assets/components/opening";


function FormLoginPesilat(props) {
  return (
    <View style={styles.container}>
      <Opening style={styles.opening}></Opening>
      <Text style={styles.username}>Username</Text>
      <Text style={styles.password}>Password</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum}>Login Sebagai Pesilat</Text>
      <TextInput
        placeholder="     Username"
        placeholderTextColor="rgba(230, 230, 230,1)"
        inlineImagePadding={8}
        autoFocus={false}
        multiline={false}
        returnKeyType="done"
        defaultValue=""
        dataDetector="none"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="    Password"
        placeholderTextColor="rgba(230, 230, 230,1)"
        secureTextEntry={true}
        style={styles.placeholder}
      ></TextInput>
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
  username: {
    fontFamily: "Inter-Medium",
    color: "#121212",
    fontSize: 16,
    marginTop: 83,
    marginLeft: 45
  },
  password: {
    fontFamily: "Inter-Medium",
    color: "#121212",
    fontSize: 16,
    marginTop: 77,
    marginLeft: 45
  },
  button: {
    width: 194,
    height: 47,
    backgroundColor: "rgba(208,193,193,1)",
    shadowColor: "rgba(171,149,149,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 15,
    marginTop: 152,
    alignSelf: "center"
  },
  login: {
    fontFamily: "Inter-Regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 15,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "Inter-SemiBold",
    color: "#121212",
    fontSize: 19,
    marginTop: -366,
    marginLeft: 91
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(170,167,167,1)",
    borderStyle: "solid",
    marginTop: 59,
    alignSelf: "center"
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(170,167,167,1)",
    marginTop: 50,
    alignSelf: "center"
  }
});

export default FormLoginPesilat;
