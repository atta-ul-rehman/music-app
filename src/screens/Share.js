import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Share(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Share</Text>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/music1.webp")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.marJaonYa}>Mar jaon ya</Text>
      </View>
      <Text style={styles.arijitSigh}>Arijit sigh</Text>
      <View style={styles.image5Row}>
        <Image
          source={require("../assets/images/reference-icon-png-22.jpg")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <Image
          source={require("../assets/images/fa.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/in1.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Image
          source={require("../assets/images/wt.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
      </View>
      <View style={styles.copyLinkRow}>
        <Text style={styles.copyLink}>Copy link</Text>
        <Text style={styles.faceBook}>FaceBook</Text>
        <Text style={styles.instagram}>instagram</Text>
        <Text style={styles.whatsapp}>Whatsapp</Text>
      </View>
      <Text style={styles.more}>More</Text>
      <Image
        source={require("../assets/images/OIP_(2)1.jpg")}
        resizeMode="contain"
        style={styles.image6}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    marginTop: 64,
    alignSelf: "center"
  },
  image1: {
    top: 0,
    left: 0,
    width: 238,
    height: 236,
    position: "absolute"
  },
  marJaonYa: {
    top: 224,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 20,
    left: 58
  },
  image1Stack: {
    width: 238,
    height: 248,
    marginTop: 2,
    marginLeft: 69
  },
  arijitSigh: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 18,
    marginLeft: 141
  },
  image5: {
    width: 57,
    height: 56,
    backgroundColor: "rgba(74,74,74,1)",
    marginTop: 14
  },
  image2: {
    width: 87,
    height: 84,
    marginLeft: 11
  },
  image3: {
    width: 58,
    height: 56,
    marginLeft: 17,
    marginTop: 11
  },
  image4: {
    width: 61,
    height: 56,
    marginLeft: 27,
    marginTop: 11
  },
  image5Row: {
    height: 84,
    flexDirection: "row",
    marginTop: 184,
    marginLeft: 29,
    marginRight: 28
  },
  copyLink: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 15
  },
  faceBook: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 15,
    marginLeft: 22
  },
  instagram: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 15,
    marginLeft: 24
  },
  whatsapp: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 15,
    marginLeft: 18
  },
  copyLinkRow: {
    height: 18,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 26
  },
  more: {
    fontFamily: "roboto-regular",
    color: "rgba(251,245,245,1)",
    fontSize: 15,
    marginTop: 79,
    marginLeft: 167
  },
  image6: {
    width: 61,
    height: 56,
    backgroundColor: "rgba(29,23,23,1)",
    marginTop: -74,
    marginLeft: 153
  }
});

export default Share;
