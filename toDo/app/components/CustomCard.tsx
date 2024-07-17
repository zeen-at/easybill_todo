import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface ICard {
  title: string;
  subtitle: string;
  progress: string;
}
const CustomCard = ({ title, subtitle, progress }: ICard) => {
  return (
    <View className="bg-white w-full items-start rounded-md ">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#1ca9c9", "#005689"]}
        className="rounded-t-md h-20 w-full px-6 py-4"
      >
        <View>
          <Text className="font-bold text-xl text-white">{title}</Text>
          <Text className="text-base text-slate-300">{subtitle}</Text>
        </View>
      </LinearGradient>
      <View>
        <Text className="py-4 px-6">{progress}</Text>
      </View>
    </View>
  );
};

export default CustomCard;
