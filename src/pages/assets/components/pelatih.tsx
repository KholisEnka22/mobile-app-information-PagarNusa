import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Pelatih(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../images/trainer.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 70,
    height: 55
  }
});

export default Pelatih;
