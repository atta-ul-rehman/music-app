import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Image } from "react-native";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <TextInput
            placeholder="Song name"
            style={styles.textInput}
          ></TextInput>
          <Text style={styles.artistName}>Artist name</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage3.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}></View>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  textInput: {
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    width: 121,
    height: 41
  },
  artistName: {
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  }
});

export default MaterialCardWithImageAndTitle;
