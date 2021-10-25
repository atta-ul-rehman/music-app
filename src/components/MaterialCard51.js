import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

function MaterialCard51(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <TextInput
          placeholder="POP"
          selectionColor="rgba(230, 230, 230,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
      <Image
        source={require("../assets/images/cardImage9.png")}
        style={styles.cardItemImagePlace}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    width: 358,
    height: 40,
    backgroundColor: "rgba(0,0,0,1)"
  },
  textInput: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
    width: 79,
    height: 41
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210,
    left: -1,
    width: 357,
    top: -13,
    height: 308
  }
});

export default MaterialCard51;
