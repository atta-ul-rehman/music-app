import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialChipBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="LOGIN" style={styles.textInput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    paddingLeft: 12,
    paddingRight: 12
  },
  textInput: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)",
    width: 38,
    height: 17,
    margin: 0
  }
});

export default MaterialChipBasic;
