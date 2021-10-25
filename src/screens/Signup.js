import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Signup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.rect1}></View>
      <View style={styles.rect2}></View>
      <Text style={styles.email}>Email</Text>
      <Text style={styles.password}>password</Text>
      <Text style={styles.confirmPassword}>Confirm password</Text>
      <Image
        source={require("../assets/images/OIP.jpg")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <MaterialButtonDark
        style={styles.materialButtonDark}
      ></MaterialButtonDark>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect: {
    width: 281,
    height: 65,
    backgroundColor: "rgba(251,245,245,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 38,
    marginTop: 265,
    marginLeft: 44
  },
  rect1: {
    width: 281,
    height: 65,
    backgroundColor: "rgba(249,242,242,1)",
    borderRadius: 38,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 158,
    marginLeft: 44
  },
  rect2: {
    width: 281,
    height: 65,
    backgroundColor: "rgba(249,242,242,1)",
    borderRadius: 38,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: -179,
    marginLeft: 44
  },
  email: {
    fontFamily: "roboto-regular",
    color: "rgba(249,246,246,1)",
    fontSize: 18,
    marginTop: -213,
    marginLeft: 44
  },
  password: {
    fontFamily: "roboto-regular",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 96,
    marginLeft: 44
  },
  confirmPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(247,243,243,1)",
    fontSize: 18,
    marginTop: 91,
    marginLeft: 44
  },
  image1: {
    width: 110,
    height: 79,
    backgroundColor: "rgba(245,236,236,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    marginTop: -353,
    marginLeft: 130
  },
  materialButtonDark: {
    height: 40,
    width: 78,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 34,
    marginTop: 378,
    marginLeft: 240
  }
});

export default Signup;
