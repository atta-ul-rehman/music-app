import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialChipWithImageAndCloseButton from "../components/MaterialChipWithImageAndCloseButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialSlider from "../components/MaterialSlider";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function Mainsongplaying(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/uploads2Fcard2Fimage2F8843952F15d43d18-bfe5-4799-b87f-39cf37e7b71f.jpeg2Ffull-fit-in__950x534.jpeg")}
        resizeMode="contain"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <View style={styles.materialChipWithImageAndCloseButton1Row}>
          <MaterialChipWithImageAndCloseButton
            style={styles.materialChipWithImageAndCloseButton1}
          ></MaterialChipWithImageAndCloseButton>
          <View style={styles.loremIpsum2Column}>
            <Text style={styles.loremIpsum2}>Playing from playlist</Text>
            <Text style={styles.loremIpsum1}>Nusrat fateh ali khan</Text>
          </View>
        </View>
        <Text style={styles.sochtaHon}>Sochta hon</Text>
        <Text style={styles.loremIpsum3}>Nusrat fateh ali khan</Text>
      </ImageBackground>
      <Icon name="heart" style={styles.icon1}></Icon>
      <MaterialSlider style={styles.materialSlider}></MaterialSlider>
      <Text style={styles.loremIpsum4}>0:00</Text>
      <Text style={styles.loremIpsum5}>4:00</Text>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6,6,6,1)"
  },
  image1: {
    top: 0,
    width: 352,
    height: 462,
    position: "absolute",
    left: 11
  },
  image1_imageStyle: {},
  materialChipWithImageAndCloseButton1: {
    width: 36,
    height: 66,
    backgroundColor: "rgba(2,2,2,1)"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 6
  },
  loremIpsum2Column: {
    width: 183,
    marginLeft: 48,
    marginTop: 12
  },
  materialChipWithImageAndCloseButton1Row: {
    height: 66,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 1,
    marginRight: 84
  },
  sochtaHon: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 286,
    marginLeft: 10
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 85
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  materialSlider: {
    position: "absolute",
    height: 30,
    width: 337,
    left: 19,
    top: 487,
    overflow: "visible",
    backgroundColor: "rgba(6,6,6,1)"
  },
  loremIpsum4: {
    top: 523,
    left: 21,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(253,252,252,1)",
    fontSize: 20
  },
  loremIpsum5: {
    top: 523,
    left: 321,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,253,253,1)",
    fontSize: 20
  },
  materialIconTextButtonsFooter: {
    height: 102,
    width: 375,
    position: "absolute",
    left: -1,
    top: 570,
    backgroundColor: "rgba(6,6,6,1)"
  },
  materialIconTextButtonsFooter1: {
    height: 72,
    width: 375,
    position: "absolute",
    left: -1,
    top: 672,
    backgroundColor: "rgba(2,2,2,1)"
  }
});

export default Mainsongplaying;
