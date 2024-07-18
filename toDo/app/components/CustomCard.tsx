import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ICard } from "../types";

const CustomCard = ({ title, subtitle, progress }: ICard) => {
  return (
    <View className="bg-white w-60 items-start rounded-md m-2">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#1ca9c9", "#005689"]}
        className="rounded-t-md h-20 w-60 px-6 py-4"
      >
        <View>
          <Text className="font-bold text-xl text-white">{title}</Text>
          <Text className="text-base text-white my-2">Priority: </Text>
        </View>
      </LinearGradient>
      <View>
        <View className="flex flex-row space-x-2 p-4">
          <TouchableOpacity className="w-16 bg-red-500 rounded-full">
            <Text className="text-white text-center p-2">High</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-16 bg-blue-400 rounded-full">
            <Text className="text-white text-center p-2">Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-16 bg-orange-400 rounded-full">
            <Text className="text-white text-center p-2">low</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;
