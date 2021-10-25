import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function CupertinoButtonGrey(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput placeholder="Signup" style={styles.textInput}></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(246,240,240,1)"
  },
  textInput: {
    color: "rgba(237,212,212,1)",
    fontSize: 17,
    fontFamily: "roboto-700",
    width: 52,
    height: 20,
    backgroundColor: "#fff"
  }
});

export default CupertinoButtonGrey;
