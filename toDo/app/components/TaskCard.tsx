import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface ITask {
  time: string;
  title: string;
  subtitle: string;
  id: string;
}

const TaskCard = ({ time, title, subtitle, id }: ITask) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("screens", { id, title, subtitle });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-row items-center space-x-3 py-2 rounded-md">
        <Text className="font-bold text-slate-400">{time}</Text>
        <View className="bg-slate-200 p-3  w-[300px] shadow-xl">
          <Text className="font-bold text-slate-800">{title}</Text>

          <Text className="text-slate-500">{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
