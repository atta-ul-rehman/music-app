import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoFooter11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <FontAwesomeIcon
          name="picture-o"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(255,255,255,1)"
            }
          ]}
        ></FontAwesomeIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <Text style={styles.tumHiHoArijit}>Tum hi ho{"\n"}Arijit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="heart"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="pause"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: "100%"
  },
  btnWrapper1: {
    flex: 0.17,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8
  },
  btnWrapper2: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  tumHiHoArijit: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
    textAlign: "left"
  },
  btnWrapper3: {
    flex: 0.17,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btnWrapper4: {
    flex: 0.17,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  }
});

export default CupertinoFooter11;
