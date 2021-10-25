import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Onecomonent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/music1.webp")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image1: {
    width: 238,
    height: 236
  }
});

export default Onecomonent;
