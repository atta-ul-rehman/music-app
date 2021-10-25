import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Basic")}
        style={styles.btnWrapper1}
      >
        <FontAwesomeIcon
          name="home"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(255,255,255,1)"
            }
          ]}
        ></FontAwesomeIcon>
        <Text
          style={[
            styles.home,
            {
              color: props.active ? "#007AFF" : "rgba(255,255,255,1)"
            }
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Palylist")}
        style={styles.btnWrapper3}
      >
        <MaterialCommunityIconsIcon
          name="library"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.library}>Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Search")}
        style={styles.btnWrapper2}
      >
        <MaterialCommunityIconsIcon
          name="cloud-search-outline"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.search}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%"
  },
  btnWrapper1: {
    flex: 0.31,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8
  },
  home: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper3: {
    flex: 0.31,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  library: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper2: {
    flex: 0.38,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  search: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default CupertinoFooter1;
