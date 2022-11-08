import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import Categories from "./Categories";
import UserRows from "./UserRows";
export default function Home() {
  return (
    <SafeAreaView style={s`bg-white pt-5`}>
      {/* app icon*/}
      <View style={s`py-5 flex-row pb-3 items-center mx-3 space-x-3 `}>
        <Image
          source={require("./pics/icon1.png")}
          style={s` h-7 w-7 bg-gray-400 rounded-full`}
        />

        <View style={s`flex-1`}>
          <Text style={s`font-bold text-gray-600 text-xs`}>Watch</Text>
          <Text style={s`font-bold text-xl `}>Have fun!</Text>
        </View>
        <Image
          source={require("./pics/icon.png")}
          style={s` h-7 w-7 bg-gray-400 rounded-full`}
        />
      </View>

      {/* search */}

      <View style={s`flex-row pb-2 items-center mx-4 space-x-3`}>
        <View
          style={s`flex-row p-3 items-center mx-3 space-x-3 bg-gray-200 flex-1`}
        >
          <Image source={require("./pics/search.png")} style={s`h-5 w-5`} />
          <TextInput
            placeholder="explore this world of reels"
            keyboardType="default"
          />
        </View>
        <Image source={require("./pics/adjustment.png")} style={s`h-5 w-5`} />
      </View>
      <ScrollView style={s`bg-gray-200`}>
        {/* people who may you know */}
        <UserRows
          id="123"
          title="People You May Know"
          description="These are some of people may you know them."
        />
        {/* categories you like */}
        <Categories
          id="123"
          title="Categories You May Like"
          description="these are the things which we built for your convinience"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
