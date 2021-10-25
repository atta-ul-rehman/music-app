import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import CupertinoFooter11 from "../components/CupertinoFooter11";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Selectartistfrombasicpage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2StackStack}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <Text style={styles.attasGallery1}>
            __________________________________________
          </Text>
          <Text style={styles.loremIpsum7}>:</Text>
        </View>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}>Nusrat fateh ali khan</Text>
          <Text style={styles.attasGallery}>Atta&#39;s gallery</Text>
        </View>
        <Svg viewBox="0 0 40.75 38" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={20}
            cy={19}
            rx={20}
            ry={19}
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.nfak3Stack}>
        <Text style={styles.nfak3}>NFAK</Text>
        <CupertinoFooter11 style={styles.cupertinoFooter3}></CupertinoFooter11>
      </View>
      <View style={styles.loremIpsum5Stack}>
        <Text style={styles.loremIpsum5}>Trending from asia,cover ,Yon</Text>
        <Image
          source={require("../assets/images/uploads2Fcard2Fimage2F8843952F15d43d18-bfe5-4799-b87f-39cf37e7b71f.jpeg2Ffull-fit-in__950x534.jpeg")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <Text style={styles.loremIpsum6}>45 likes , 2:min</Text>
      <View style={styles.materialCardWithImageAndTitle1Stack}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle1}
        ></MaterialCardWithImageAndTitle>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle2}
        ></MaterialCardWithImageAndTitle>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter4}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect2: {
    top: 23,
    left: 1,
    width: 375,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  attasGallery1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum7: {
    top: 15,
    left: 67,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect2Stack: {
    top: 28,
    left: 0,
    width: 379,
    height: 63,
    position: "absolute"
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  attasGallery: {
    top: 19,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsumStack: {
    top: 0,
    left: 8,
    width: 184,
    height: 43,
    position: "absolute"
  },
  ellipse: {
    top: 53,
    left: 14,
    width: 41,
    height: 38,
    position: "absolute"
  },
  rect2StackStack: {
    width: 379,
    height: 91,
    marginTop: 355,
    marginLeft: -1
  },
  nfak3: {
    top: 0,
    left: 71,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  cupertinoFooter3: {
    height: 76,
    width: 379,
    position: "absolute",
    left: 0,
    top: 11,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(50,50,50,1)"
  },
  nfak3Stack: {
    width: 379,
    height: 87,
    marginTop: 210
  },
  loremIpsum5: {
    top: 308,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  image1: {
    top: 0,
    width: 332,
    height: 314,
    position: "absolute",
    left: 0
  },
  loremIpsum5Stack: {
    width: 332,
    height: 327,
    marginTop: -740,
    marginLeft: 22
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 1,
    marginLeft: 3
  },
  materialCardWithImageAndTitle1: {
    height: 104,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialCardWithImageAndTitle2: {
    height: 104,
    width: 359,
    position: "absolute",
    left: 0,
    top: 100,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialCardWithImageAndTitle1Stack: {
    width: 359,
    height: 204,
    marginTop: 101,
    marginLeft: 8
  },
  cupertinoFooter4: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 88,
    marginLeft: -1
  }
});

export default Selectartistfrombasicpage;
