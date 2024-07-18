import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type IHeader = {
  title: string;
};
const Header = ({ title }: IHeader) => {
  return (
    <View className="flex flex-row space-x-28">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back-outline" size={20} color="#000" />
      </TouchableOpacity>
      <Text className="text-xl font-bold">{title}</Text>
    </View>
  );
};

export default Header;
