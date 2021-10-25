import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Recentplayed")}
        style={styles.button7}
      >
        <TouchableOpacity style={styles.button8}>
          <EntypoIcon
            name="back-in-time"
            style={styles.rightIcon2}
          ></EntypoIcon>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Setting")}
        style={styles.button5}
      >
        <TouchableOpacity style={styles.button6}>
          <EvilIconsIcon name="gear" style={styles.rightIcon1}></EvilIconsIcon>
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.getStarted}>Get Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(50,50,50,1)",
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button7: {
    flex: 0.13,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button8: {},
  rightIcon2: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32
  },
  button5: {
    flex: 0.13,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button6: {},
  rightIcon1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32
  },
  getStarted: {
    top: 10,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  }
});

export default CupertinoHeaderWithAddButton;
