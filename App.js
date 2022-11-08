// expo install expo-camera
// expo install expo-media-library
// expo install expo-sharing
// expo install expo-av

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import App2 from "./Record";
import Home from "./screens/Home";
import { s } from "react-native-wind";
import Videos from "./Videos";
const tab = createBottomTabNavigator();
function HomeScreen() {
  return <Home />;
}
function Cameraa() {
  return <App2 />;
}
function Profile() {
  return <Videos />;
}
export default function App() {
  console.log("yeah one person is got logged in");
  let x = 10;
  console.log(Dimensions.get("screen"));

  return (
    <NavigationContainer style={s``}>
      <tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          headerShown: false,
          tabBarActiveTintColor: "white",
        }}
      >
        <tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/splash.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
        <tab.Screen
          name="reels"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/icon.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
        <tab.Screen
          name="create_video"
          component={Cameraa}
          options={{
            tabBarIcon: ({ focused }) => {
              <Image
                source={require("./assets/icon.png")}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />;
            },
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
});
