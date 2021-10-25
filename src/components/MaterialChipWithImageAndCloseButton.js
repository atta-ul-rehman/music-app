import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MaterialChipWithImageAndCloseButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="chevron-down" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    flexDirection: "row"
  },
  iconStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginRight: 4
  }
});

export default MaterialChipWithImageAndCloseButton;
