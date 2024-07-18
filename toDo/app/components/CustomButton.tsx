import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IButton } from "../types";

const CustomButton = ({ handlePress, title }: IButton) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-full py-6"
      activeOpacity={0.6}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#1ca9c9", "#1ca9c9"]}
        className="rounded-md"
      >
        <Text className="text-center font-semibold text-lg text-white py-3">
          {" "}
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
