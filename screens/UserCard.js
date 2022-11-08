import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const UserCard = ({ username, imgpath }) => {
  return (
    <TouchableOpacity style={s`items-center bg-white mr-4 shadow`}>
      <Image source={{ uri: imgpath }} style={s`h-36 w-36 rounded-sm`} />
      <View Style={s`px-3 pb-4 `}>
        <Text style={s`font-bold text-lg pt-2`}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
