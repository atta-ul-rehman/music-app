import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonDark3 from "../components/MaterialButtonDark3";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}></View>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}></View>
        <Text style={styles.password}>Password</Text>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <Image
        source={require("../assets/images/OIP.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.email}>Email</Text>
      <View style={styles.forgetPasswordStackRow}>
        <View style={styles.forgetPasswordStack}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
          <Text style={styles.signup}>Signup</Text>
        </View>
        <MaterialButtonDark3
          style={styles.materialButtonDark3}
        ></MaterialButtonDark3>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect2: {
    width: 289,
    height: 60,
    backgroundColor: "rgba(251,246,246,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 38,
    marginTop: 331,
    marginLeft: 43
  },
  rect1: {
    top: 36,
    width: 289,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(253,250,250,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 38,
    left: 0
  },
  password: {
    top: 0,
    left: 3,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 107,
    textAlign: "left",
    fontSize: 22
  },
  rect1Stack: {
    width: 289,
    height: 96,
    marginTop: 10,
    marginLeft: 43
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -211,
    marginLeft: 197
  },
  image: {
    width: 110,
    height: 79,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -116,
    marginLeft: 133
  },
  email: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    height: 37,
    width: 107,
    textAlign: "left",
    fontSize: 22,
    marginTop: 45,
    marginLeft: 43
  },
  forgetPassword: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(253,249,249,1)",
    height: 37,
    width: 107,
    textAlign: "left",
    fontSize: 14,
    backgroundColor: "rgba(0,0,0,1)",
    left: 0,
    top: 0
  },
  signup: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(249,243,243,1)",
    height: 37,
    width: 107,
    textAlign: "left",
    fontSize: 14,
    lineHeight: 10
  },
  forgetPasswordStack: {
    width: 107,
    height: 64
  },
  materialButtonDark3: {
    height: 41,
    width: 81,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    marginLeft: 89,
    marginTop: 7
  },
  forgetPasswordStackRow: {
    height: 64,
    flexDirection: "row",
    marginTop: 178,
    marginLeft: 46,
    marginRight: 52
  }
});

export default Login;
