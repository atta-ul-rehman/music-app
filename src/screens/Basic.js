import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Basic(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <View style={styles.hitsStackStackRow}>
        <View style={styles.hitsStackStack}>
          <View style={styles.hitsStack}>
            <Text style={styles.hits}>hits</Text>
            <TextInput
              placeholder="Hits"
              textBreakStrategy="highQuality"
              placeholderTextColor="rgba(255,255,255,1)"
              style={styles.textInput3}
            ></TextInput>
            <Text style={styles.atifAslam4}>AtifAslam</Text>
          </View>
          <View style={styles.nfak6Stack}>
            <Text style={styles.nfak6}>NFAK</Text>
            <Image
              source={require("../assets/images/music.webp")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
        <View style={styles.nfak5Stack}>
          <Text style={styles.nfak5}>NFAK</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
      <TextInput
        placeholder="Your likes"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput1}
      ></TextInput>
      <TextInput
        placeholder="Similer"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput2}
      ></TextInput>
      <View style={styles.atifAslam3StackRow}>
        <View style={styles.atifAslam3Stack}>
          <Text style={styles.atifAslam3}>AtifAslam</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.nfak3}>NFAK</Text>
        </View>
        <View style={styles.image3Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.nfak4}>NFAK</Text>
        </View>
      </View>
      <View style={styles.image8StackRow}>
        <View style={styles.image8Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Text style={styles.atifAslam5}>AtifAslam</Text>
        </View>
        <View style={styles.nfak8Stack}>
          <Text style={styles.nfak8}>NFAK</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
        </View>
        <View style={styles.nfak7Stack}>
          <Text style={styles.nfak7}>NFAK</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoHeaderWithAddButton: {
    height: 57,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 37
  },
  hits: {
    top: 26,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "center"
  },
  textInput3: {
    top: 39,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22
  },
  atifAslam4: {
    top: 0,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  hitsStack: {
    top: 113,
    left: 0,
    width: 327,
    height: 76,
    position: "absolute"
  },
  nfak6: {
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
  image6: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak6Stack: {
    top: 0,
    left: 178,
    width: 119,
    height: 150,
    position: "absolute"
  },
  image5: {
    top: 0,
    left: 18,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  hitsStackStack: {
    width: 327,
    height: 189
  },
  nfak5: {
    top: 113,
    left: 0,
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
    left: 6,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak5Stack: {
    width: 125,
    height: 150,
    marginLeft: 3
  },
  hitsStackStackRow: {
    height: 189,
    flexDirection: "row",
    marginTop: 269,
    marginLeft: 12,
    marginRight: -92
  },
  cupertinoFooter1: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 191
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: -696,
    marginLeft: 12
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: 173,
    marginLeft: 12
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
  atifAslam3Stack: {
    width: 119,
    height: 150
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
  nfak3: {
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
  image1Stack: {
    width: 119,
    height: 150,
    marginLeft: 41
  },
  image3: {
    top: 0,
    left: 6,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak4: {
    top: 113,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image3Stack: {
    width: 125,
    height: 150,
    marginLeft: 33
  },
  atifAslam3StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -209,
    marginLeft: 30,
    marginRight: -92
  },
  image8: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  atifAslam5: {
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
  image8Stack: {
    width: 119,
    height: 150
  },
  nfak8: {
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
  image9: {
    top: 0,
    left: 0,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak8Stack: {
    width: 119,
    height: 150,
    marginLeft: 41
  },
  nfak7: {
    top: 113,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  image7: {
    top: 0,
    left: 6,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  nfak7Stack: {
    width: 125,
    height: 150,
    marginLeft: 33
  },
  image8StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 250,
    marginLeft: 30,
    marginRight: -92
  }
});

export default Basic;
