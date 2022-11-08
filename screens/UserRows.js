import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import UserCard from "./UserCard";

const UserRows = ({ id, title, description }) => {
  return (
    <View>
      <View style={s`flex-row mt-4 items-center justify-between px-4 `}>
        <Text style={s`font-bold text-lg`}>{title}</Text>
        <Image
          source={{ uri: "https://i.postimg.cc/yNCb6Fvn/right-Arrow.png" }}
          style={s`h-5 w-8`}
        />
      </View>
      <Text style={s`text-xs text-gray-500 px-4`}>{description}</Text>
      {/* scroll view */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* usercardds and categories */}
        <UserCard
          username="Pranay"
          imgpath="https://i.postimg.cc/J0brtnPw/1632022919322-1.jpg"
        />
        <UserCard
          username="Gowtham"
          imgpath="https://i.postimg.cc/KjW06L1P/icon.png"
        />
        <UserCard
          username="Omkar"
          imgpath="https://i.postimg.cc/KjW06L1P/icon.png"
        />
      </ScrollView>
    </View>
  );
};

export default UserRows;
