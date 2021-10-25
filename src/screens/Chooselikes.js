import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import MaterialButtonDark4 from "../components/MaterialButtonDark4";

function Chooselikes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <TextInput
            placeholder="Choosed"
            textBreakStrategy="highQuality"
            placeholderTextColor="rgba(255,250,250,1)"
            style={styles.textInput2}
          ></TextInput>
          <Text style={styles.atifAslam}>AtifAslam</Text>
          <TextInput placeholder="-" style={styles.textInput26}></TextInput>
          <TextInput placeholder="-" style={styles.textInput27}></TextInput>
        </View>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.nfak}>NFAK</Text>
        </View>
      </View>
      <TextInput
        placeholder="Choose your favourite Artist"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput28}
      ></TextInput>
      <TextInput
        placeholder="Available"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput3}
      ></TextInput>
      <View style={styles.bilalSaeedStackRow}>
        <View style={styles.bilalSaeedStack}>
          <Text style={styles.bilalSaeed}>Bilal saeed</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <TextInput placeholder="+" style={styles.textInput24}></TextInput>
        </View>
        <View style={styles.btsStack}>
          <Text style={styles.bts}>BTS</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <TextInput placeholder="+" style={styles.textInput23}></TextInput>
        </View>
      </View>
      <View style={styles.atifAslam2StackRow}>
        <View style={styles.atifAslam2Stack}>
          <Text style={styles.atifAslam2}>AtifAslam</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <TextInput placeholder="+" style={styles.textInput25}></TextInput>
        </View>
        <View style={styles.atifAslam3Stack}>
          <Text style={styles.atifAslam3}>AtifAslam</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <TextInput placeholder="+" style={styles.textInput22}></TextInput>
        </View>
      </View>
      <MaterialButtonDark4
        style={styles.materialButtonDark4}
      ></MaterialButtonDark4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  image: {
    top: 34,
    left: 6,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  textInput2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22
  },
  atifAslam: {
    top: 147,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  textInput26: {
    top: 35,
    left: 278,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  textInput27: {
    top: 35,
    left: 108,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 327,
    height: 184,
    position: "absolute"
  },
  image1: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak: {
    top: 110,
    left: 6,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image1Stack: {
    top: 37,
    left: 177,
    width: 119,
    height: 147,
    position: "absolute"
  },
  imageStackStack: {
    width: 327,
    height: 184,
    marginTop: 119,
    marginLeft: 24
  },
  textInput28: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 59,
    width: 375,
    textAlign: "center",
    fontSize: 22,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: -261
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: 203,
    marginLeft: 24
  },
  bilalSaeed: {
    top: 113,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 21
  },
  image2: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  textInput24: {
    top: 1,
    left: 102,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  bilalSaeedStack: {
    width: 140,
    height: 150
  },
  bts: {
    top: 113,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image5: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  textInput23: {
    top: 1,
    left: 91,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  btsStack: {
    width: 129,
    height: 150,
    marginLeft: 31
  },
  bilalSaeedStackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 30,
    marginRight: 45
  },
  atifAslam2: {
    top: 113,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image3: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  textInput25: {
    top: 1,
    left: 102,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  atifAslam2Stack: {
    width: 140,
    height: 150
  },
  atifAslam3: {
    top: 113,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image4: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  textInput22: {
    top: 1,
    left: 101,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "rgba(251,248,248,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    width: 38,
    height: 39,
    lineHeight: 44
  },
  atifAslam3Stack: {
    width: 139,
    height: 150,
    marginLeft: 31
  },
  atifAslam2StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 35
  },
  materialButtonDark4: {
    height: 51,
    width: 92,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    marginTop: 22,
    marginLeft: 124
  }
});

export default Chooselikes;
