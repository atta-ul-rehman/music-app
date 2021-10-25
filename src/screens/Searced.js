import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialChipWithCloseButton1 from "../components/MaterialChipWithCloseButton1";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Searced(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.newReleases}>New Releases</Text>
      <Text style={styles.bestNewReleases}>Best new releases</Text>
      <MaterialChipWithCloseButton1
        style={styles.materialChipWithCloseButton1}
      ></MaterialChipWithCloseButton1>
      <View style={styles.imageStackRow}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.releaseRadar}>Release radar</Text>
        </View>
        <View style={styles.releaseRadar1Stack}>
          <Text style={styles.releaseRadar1}>Release radar</Text>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
      </View>
      <Text style={styles.newAlbims}>New albims</Text>
      <View style={styles.releaseRadar3StackRow}>
        <View style={styles.releaseRadar3Stack}>
          <Text style={styles.releaseRadar3}>Release radar</Text>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <View style={styles.image2Stack}>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.releaseRadar2}>Release radar</Text>
        </View>
      </View>
      <View style={styles.image4StackRow}>
        <View style={styles.image4Stack}>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.releaseRadar4}>Release radar</Text>
        </View>
        <View style={styles.releaseRadar5Stack}>
          <Text style={styles.releaseRadar5}>Release radar</Text>
          <Image
            source={require("../assets/images/music1.webp")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  newReleases: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 30,
    marginTop: 89,
    marginLeft: 93
  },
  bestNewReleases: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 108
  },
  materialChipWithCloseButton1: {
    height: 38,
    width: 48,
    backgroundColor: "rgba(4,4,4,1)",
    marginTop: -110,
    marginLeft: 8
  },
  image: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  imageStack: {
    width: 154,
    height: 172
  },
  releaseRadar1: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  image1: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar1Stack: {
    width: 154,
    height: 172,
    marginLeft: 16
  },
  imageStackRow: {
    height: 172,
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 27,
    marginRight: 24
  },
  newAlbims: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    marginTop: 18,
    marginLeft: 128
  },
  releaseRadar3: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  image3: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar3Stack: {
    width: 154,
    height: 172
  },
  image2: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar2: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  image2Stack: {
    width: 154,
    height: 172,
    marginLeft: 16
  },
  releaseRadar3StackRow: {
    height: 172,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 27,
    marginRight: 24
  },
  image4: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar4: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  image4Stack: {
    width: 154,
    height: 172
  },
  releaseRadar5: {
    top: 148,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 17
  },
  image5: {
    top: 0,
    left: 0,
    width: 154,
    height: 160,
    position: "absolute"
  },
  releaseRadar5Stack: {
    width: 154,
    height: 172,
    marginLeft: 16
  },
  image4StackRow: {
    height: 172,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 27,
    marginRight: 24
  },
  cupertinoFooter1: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)"
  }
});

export default Searced;
