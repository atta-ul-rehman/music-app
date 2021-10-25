import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.leftBtn}>
          <MaterialCommunityIconsIcon
            name="heart"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="shape-square-plus"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightBtn}>
          <MaterialCommunityIconsIcon
            name="share"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
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
    flex: 1,
    width: 185,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 180
  },
  buttonGroup: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    left: 15,
    width: 183,
    top: 158,
    height: 42,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  leftBtn: {},
  icon1: {
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    opacity: 0.5
  },
  centerBtn: {
    backgroundColor: "#fff"
  },
  icon2: {
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    opacity: 0.5
  },
  rightBtn: {},
  icon3: {
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    opacity: 0.5
  }
});

export default MaterialCardWithButtons;
