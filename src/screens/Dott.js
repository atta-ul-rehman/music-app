import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCardWithButtons1 from "../components/MaterialCardWithButtons1";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Dott(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum1}>Nusrat fateh ali khan</Text>
      <MaterialCardWithButtons1
        style={styles.materialCardWithButtons1}
      ></MaterialCardWithButtons1>
      <Icon name="keyboard-backspace" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 525,
    marginLeft: 90
  },
  materialCardWithButtons1: {
    height: 345,
    width: 284,
    marginTop: -407,
    marginLeft: 46
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -439,
    marginLeft: 26
  }
});

export default Dott;
