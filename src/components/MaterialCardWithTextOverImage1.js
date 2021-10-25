import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCardWithTextOverImage1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage5.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.forYou}>For you</Text>
        </View>
      </View>
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
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 359
  },
  cardBody: {
    position: "absolute",
    bottom: 214,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 168,
    right: 4
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  forYou: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12
  }
});

export default MaterialCardWithTextOverImage1;
