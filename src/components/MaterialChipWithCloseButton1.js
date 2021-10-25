import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialChipWithCloseButton1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.chipText}></Text>
      <Icon name="keyboard-backspace" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(5,5,5,1)",
    paddingLeft: 12,
    borderRadius: 50
  },
  chipText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)"
  },
  iconStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    marginLeft: 4,
    marginRight: 4
  }
});

export default MaterialChipWithCloseButton1;
