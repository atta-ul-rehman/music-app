import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import CupertinoFooter11 from "../components/CupertinoFooter11";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Palylist(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.artistsRow}>
        <Text style={styles.artists}>Artists</Text>
        <Text style={styles.playlist}>Playlist</Text>
        <Text style={styles.genre}>Genre</Text>
      </View>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle1}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle2}
      ></MaterialCardWithImageAndTitle>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle3}
      ></MaterialCardWithImageAndTitle>
      <View style={styles.materialCardWithImageAndTitle4Stack}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle4}
        ></MaterialCardWithImageAndTitle>
        <CupertinoFooter11 style={styles.cupertinoFooter1}></CupertinoFooter11>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter2}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialHeader1: {
    height: 64,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 47
  },
  artists: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 27
  },
  playlist: {
    fontFamily: "roboto-regular",
    color: "rgba(247,242,242,1)",
    fontSize: 27,
    marginLeft: 56
  },
  genre: {
    fontFamily: "roboto-regular",
    color: "rgba(247,243,243,1)",
    fontSize: 27,
    marginLeft: 48
  },
  artistsRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 17,
    marginRight: 17
  },
  materialCardWithImageAndTitle1: {
    height: 104,
    width: 359,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 32,
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
    marginTop: 21,
    marginLeft: 8
  },
  materialCardWithImageAndTitle4: {
    height: 104,
    width: 359,
    position: "absolute",
    left: 12,
    bottom: 69,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoFooter1: {
    height: 74,
    width: 379,
    position: "absolute",
    left: 0,
    top: 99,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(50,50,50,1)"
  },
  materialCardWithImageAndTitle4Stack: {
    width: 379,
    height: 173,
    marginTop: 15,
    marginLeft: -4
  },
  cupertinoFooter2: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)"
  }
});

export default Palylist;
