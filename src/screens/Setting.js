import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialChipWithCloseButton1 from "../components/MaterialChipWithCloseButton1";
import MaterialSlider1 from "../components/MaterialSlider1";
import MaterialChipWithCloseButton from "../components/MaterialChipWithCloseButton";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Setting(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.materialChipWithCloseButton1Row}>
          <MaterialChipWithCloseButton1
            style={styles.materialChipWithCloseButton1}
          ></MaterialChipWithCloseButton1>
          <Text style={styles.settings}>Settings</Text>
        </View>
      </View>
      <Text style={styles.playBack}>Play back</Text>
      <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
      <Text style={styles.playBack1}>1x</Text>
      <Text style={styles.account}>Account</Text>
      <Text style={styles.abcGamilCom}>abc @ gamil.com</Text>
      <Text style={styles.crossFade}>Cross fade</Text>
      <View style={styles.musicScreenOffRow}>
        <Text style={styles.musicScreenOff}>Music Screen off</Text>
        <MaterialChipWithCloseButton
          style={styles.materialChipWithCloseButton}
        ></MaterialChipWithCloseButton>
      </View>
      <Text style={styles.abcGamilCom1}>
        Allow to listen when screen is off
      </Text>
      <Text style={styles.autoPlay}>Auto play</Text>
      <View style={styles.abcGamilCom2Row}>
        <Text style={styles.abcGamilCom2}>
          Keep iistning to similer songs{"\n"}when song ends
        </Text>
        <MaterialChipWithCloseButton
          style={styles.materialChipWithCloseButton1}
        ></MaterialChipWithCloseButton>
      </View>
      <Text style={styles.abcGamilCom3}>
        Allow to cross fade between {"\n"}songs
      </Text>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,2,2,1)"
  },
  rect: {
    width: 375,
    height: 66,
    backgroundColor: "rgba(50,50,50,1)",
    flexDirection: "row",
    marginTop: 45
  },
  materialChipWithCloseButton1: {
    height: 48,
    width: 76,
    backgroundColor: "rgba(4,4,4,1)",
    marginLeft: 33
  },
  settings: {
    fontFamily: "roboto-700",
    color: "rgba(247,244,244,1)",
    fontSize: 30,
    marginLeft: 83
  },
  materialChipWithCloseButton1Row: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 131,
    marginTop: 14
  },
  playBack: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 109,
    marginLeft: 16
  },
  materialSlider1: {
    height: 36,
    width: 310,
    marginTop: 19,
    marginLeft: 31
  },
  playBack1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 9,
    marginLeft: 16
  },
  account: {
    fontFamily: "roboto-700",
    color: "rgba(249,246,246,1)",
    fontSize: 30,
    marginTop: -242,
    marginLeft: 121
  },
  abcGamilCom: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 13,
    marginLeft: 121
  },
  crossFade: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 190,
    marginLeft: 16
  },
  musicScreenOff: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 2
  },
  materialChipWithCloseButton: {
    height: 48,
    width: 76,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 64
  },
  musicScreenOffRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 81,
    marginLeft: 16,
    marginRight: -10
  },
  abcGamilCom1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 16
  },
  autoPlay: {
    fontFamily: "roboto-700",
    color: "rgba(253,250,250,1)",
    fontSize: 30,
    marginTop: 30,
    marginLeft: 16
  },
  abcGamilCom2: {
    fontFamily: "roboto-regular",
    color: "rgba(253,252,252,1)",
    fontSize: 20,
    marginTop: 4
  },
  abcGamilCom2Row: {
    height: 52,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: -10
  },
  abcGamilCom3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: -253,
    marginLeft: 16
  },
  cupertinoFooter1: {
    height: 68,
    width: 375,
    backgroundColor: "rgba(50,50,50,1)",
    marginTop: 259
  }
});

export default Setting;
