import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import MaterialCard51 from "../components/MaterialCard51";
import CupertinoFooter11 from "../components/CupertinoFooter11";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Search(props) {
  return (
    <View style={styles.container}>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <View style={styles.materialCard51Row}>
        <MaterialCard51 style={styles.materialCard51}></MaterialCard51>
        <MaterialCard51 style={styles.materialCard53}></MaterialCard51>
      </View>
      <View style={styles.materialCard52Row}>
        <MaterialCard51 style={styles.materialCard52}></MaterialCard51>
        <MaterialCard51 style={styles.materialCard54}></MaterialCard51>
      </View>
      <View style={styles.materialCard56StackStack}>
        <View style={styles.materialCard56Stack}>
          <MaterialCard51 style={styles.materialCard56}></MaterialCard51>
          <CupertinoFooter11
            style={styles.cupertinoFooter1}
          ></CupertinoFooter11>
        </View>
        <MaterialCard51 style={styles.materialCard58}></MaterialCard51>
      </View>
      <Text style={styles.browseAll}>Browse all</Text>
      <Text style={styles.yourTopGeners}>Your top geners</Text>
      <CupertinoFooter1 style={styles.cupertinoFooter2}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoSearchBarBasic: {
    height: 78,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 43
  },
  materialCard51: {
    height: 146,
    width: 151
  },
  materialCard53: {
    height: 146,
    width: 151,
    marginLeft: 34
  },
  materialCard51Row: {
    height: 146,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 13,
    marginRight: 26
  },
  materialCard52: {
    height: 146,
    width: 151
  },
  materialCard54: {
    height: 146,
    width: 151,
    marginLeft: 34
  },
  materialCard52Row: {
    height: 146,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 13,
    marginRight: 26
  },
  materialCard56: {
    height: 146,
    width: 151,
    position: "absolute",
    left: 199,
    top: 0
  },
  cupertinoFooter1: {
    height: 74,
    width: 379,
    position: "absolute",
    left: 0,
    top: 106,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(50,50,50,1)"
  },
  materialCard56Stack: {
    top: 0,
    left: 0,
    width: 379,
    height: 180,
    position: "absolute"
  },
  materialCard58: {
    height: 146,
    width: 151,
    position: "absolute",
    left: 14,
    top: 0
  },
  materialCard56StackStack: {
    width: 379,
    height: 180,
    marginTop: 29,
    marginLeft: -1
  },
  browseAll: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 24,
    marginTop: -392,
    marginLeft: 14
  },
  yourTopGeners: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 24,
    marginTop: -229,
    marginLeft: 14
  },
  cupertinoFooter2: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 564
  }
});

export default Search;
