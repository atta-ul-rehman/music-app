import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import CupertinoFooter11 from "../components/CupertinoFooter11";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Basicpage1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.abc4StackStack}>
        <View style={styles.abc4Stack}>
          <Text style={styles.abc4}>ABC</Text>
          <CupertinoFooter11
            style={styles.cupertinoFooter11}
          ></CupertinoFooter11>
          <CupertinoFooter1 style={styles.cupertinoFooter12}></CupertinoFooter1>
        </View>
        <Text style={styles.abc5}>ABC</Text>
      </View>
      <View style={styles.atifAslam1StackRow}>
        <View style={styles.atifAslam1Stack}>
          <Text style={styles.atifAslam1}>AtifAslam</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
        <View style={styles.image4Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.nfak1}>NFAK</Text>
        </View>
        <View style={styles.rect3StackStack}>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}></View>
            <Text style={styles.nfak2}>NFAK</Text>
          </View>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
        </View>
      </View>
      <View style={styles.image2StackRow}>
        <View style={styles.image2Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.atifAslam3}>AtifAslam</Text>
        </View>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.nfak6}>NFAK</Text>
        </View>
        <View style={styles.image3Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.nfak5}>NFAK</Text>
        </View>
      </View>
      <View style={styles.image8StackRow}>
        <View style={styles.image8Stack}>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Text style={styles.atifAslam2}>AtifAslam</Text>
        </View>
        <View style={styles.nfak4Stack}>
          <Text style={styles.nfak4}>NFAK</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
        </View>
        <View style={styles.nfak3Stack}>
          <Text style={styles.nfak3}>NFAK</Text>
          <Image
            source={require("../assets/images/music.webp")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
        </View>
      </View>
      <TextInput
        placeholder="Pop"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput1}
      ></TextInput>
      <TextInput
        placeholder="Trending"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput2}
      ></TextInput>
      <TextInput
        placeholder="New"
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(255,255,255,1)"
        style={styles.textInput3}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  abc4: {
    top: 27,
    left: 58,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "center"
  },
  cupertinoFooter11: {
    height: 76,
    width: 379,
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(50,50,50,1)"
  },
  cupertinoFooter12: {
    height: 68,
    width: 375,
    position: "absolute",
    left: 0,
    top: 75,
    backgroundColor: "rgba(50,50,50,1)"
  },
  abc4Stack: {
    top: 0,
    left: 0,
    width: 379,
    height: 143,
    position: "absolute"
  },
  abc5: {
    top: 27,
    left: 193,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "center"
  },
  abc4StackStack: {
    width: 379,
    height: 143,
    marginTop: 677
  },
  atifAslam1: {
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
  atifAslam1Stack: {
    width: 119,
    height: 150
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
  nfak1: {
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
  image4Stack: {
    width: 119,
    height: 150,
    marginLeft: 41
  },
  rect3: {
    top: 18,
    left: 90,
    width: 376,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  nfak2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 105,
    textAlign: "center",
    fontSize: 22
  },
  rect3Stack: {
    top: 113,
    left: 0,
    width: 466,
    height: 37,
    position: "absolute"
  },
  image6: {
    top: 0,
    left: 6,
    width: 119,
    height: 122,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 37
  },
  rect3StackStack: {
    width: 466,
    height: 150,
    marginLeft: 33
  },
  atifAslam1StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -523,
    marginLeft: 18,
    marginRight: -421
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
  image2Stack: {
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
  image3Stack: {
    width: 125,
    height: 150,
    marginLeft: 33
  },
  image2StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 18,
    marginRight: -80
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
  image8Stack: {
    width: 119,
    height: 150
  },
  nfak4: {
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
  nfak4Stack: {
    width: 119,
    height: 150,
    marginLeft: 41
  },
  nfak3: {
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
  nfak3Stack: {
    width: 125,
    height: 150,
    marginLeft: 33
  },
  image8StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -550,
    marginLeft: 18,
    marginRight: -80
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: 211,
    marginLeft: 14
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: -226,
    marginLeft: 9
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 327,
    textAlign: "left",
    fontSize: 22,
    marginTop: -247,
    marginLeft: 14
  }
});

export default Basicpage1;
