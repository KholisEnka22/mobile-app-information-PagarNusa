import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function MaterialHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Icon name="arrow-left" style={styles.leftIcon}></Icon>
      </TouchableOpacity>
      <View style={styles.leftIconButtonFiller}>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Title
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    marginBottom: 19
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18,
    alignSelf: "center"
  },
  leftIconButtonFiller: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default MaterialHeader;
