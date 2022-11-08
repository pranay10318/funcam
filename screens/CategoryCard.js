import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const CategoryCard = ({ name, imgurl }) => {
  return (
    <TouchableOpacity style={s`items-center bg-white mr-4 shadow`}>
      <Image source={{ uri: imgurl }} style={s`h-36 w-36 rounded-sm`} />
      <View Style={s`px-3 pb-4 `}>
        <Text style={s`font-bold text-lg pt-2`}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
