import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialChipWithCloseButton1 from "../components/MaterialChipWithCloseButton1";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import CupertinoFooter1 from "../components/CupertinoFooter1";
import CupertinoFooter11 from "../components/CupertinoFooter11";

function Recentplayed(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialChipWithCloseButton1Row}>
        <MaterialChipWithCloseButton1
          style={styles.materialChipWithCloseButton1}
        ></MaterialChipWithCloseButton1>
        <Text style={styles.recentlyPlayed}>Recently played</Text>
      </View>
      <Text style={styles.today}>Today</Text>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle1}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle2}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle3}
      ></MaterialCardWithImageAndTitle>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
      <CupertinoFooter11 style={styles.cupertinoFooter2}></CupertinoFooter11>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialChipWithCloseButton1: {
    height: 38,
    width: 48,
    backgroundColor: "rgba(4,4,4,1)",
    marginTop: 1
  },
  recentlyPlayed: {
    fontFamily: "roboto-700",
    color: "rgba(249,242,242,1)",
    fontSize: 27,
    marginLeft: 36
  },
  materialChipWithCloseButton1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 8,
    marginRight: 91
  },
  today: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 24,
    marginTop: 20,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle: {
    height: 104,
    width: 359,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 32,
    marginLeft: 8
  },
  materialCardWithImageAndTitle1: {
    height: 104,
    width: 359,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 11,
    marginLeft: 8
  },
  materialCardWithImageAndTitle2: {
    height: 104,
    width: 359,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 16,
    marginLeft: 8
  },
  materialCardWithImageAndTitle3: {
    height: 104,
    width: 359,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 13,
    marginLeft: 8
  },
  cupertinoFooter1: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 119
  },
  cupertinoFooter2: {
    height: 74,
    width: 379,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: -142,
    marginLeft: -4
  }
});

export default Recentplayed;
