import { View, Text } from "react-native";
import React from "react";

interface IEmpty {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: IEmpty) => {
  return (
    <View className="mx-auto py-10 justify-center items-center">
      <Text className="text-center font-bold text-xl text-slate-800">
        {title}
      </Text>
      <Text className="text-center text-slate-500">{subtitle}</Text>
    </View>
  );
};

export default EmptyState;
