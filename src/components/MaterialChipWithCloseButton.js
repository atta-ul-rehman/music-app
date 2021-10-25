import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialChipWithCloseButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="radiobox-marked" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E0E0E0",
    paddingLeft: 12,
    borderRadius: 50,
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 4,
    marginRight: 4,
    alignSelf: "center"
  }
});

export default MaterialChipWithCloseButton;
