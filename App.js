import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Basic from "./src/screens/Basic";
import Basicpage1 from "./src/screens/Basicpage1";
import Chooselikes from "./src/screens/Chooselikes";
import Dott from "./src/screens/Dott";
import Login from "./src/screens/Login";
import Mainsongplaying from "./src/screens/Mainsongplaying";
import Palylist from "./src/screens/Palylist";
import Recentplayed from "./src/screens/Recentplayed";
import Searced from "./src/screens/Searced";
import Search from "./src/screens/Search";
import Selectartistfrombasicpage from "./src/screens/Selectartistfrombasicpage";
import Setting from "./src/screens/Setting";
import Share from "./src/screens/Share";
import Signup from "./src/screens/Signup";

const DrawerNavigation = createDrawerNavigator({
  Basic: Basic,
  Basicpage1: Basicpage1,
  Chooselikes: Chooselikes,
  Dott: Dott,
  Login: Login,
  Mainsongplaying: Mainsongplaying,
  Palylist: Palylist,
  Recentplayed: Recentplayed,
  Searced: Searced,
  Search: Search,
  Selectartistfrombasicpage: Selectartistfrombasicpage,
  Setting: Setting,
  Share: Share,
  Signup: Signup
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Basic: Basic,
    Basicpage1: Basicpage1,
    Chooselikes: Chooselikes,
    Dott: Dott,
    Login: Login,
    Mainsongplaying: Mainsongplaying,
    Palylist: Palylist,
    Recentplayed: Recentplayed,
    Searced: Searced,
    Search: Search,
    Selectartistfrombasicpage: Selectartistfrombasicpage,
    Setting: Setting,
    Share: Share,
    Signup: Signup
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
