import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

interface ITask {
    date: Date;
  title: string;
  subtitle: string;
  id: string;
}

const TaskCard = ({ date, title, subtitle, id }: ITask) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });

  const handlePress = () => {
    router.push({
      pathname: `/(screens)/[id]`,
      params: { id, date:date.toLocaleDateString(), title, subtitle },
    });
};
  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-row items-center space-x-3 py-2 rounded-md">
        <Text className="font-bold text-slate-400">{date && formattedDate}</Text>
        <View className="bg-slate-200 p-3  w-[300px] shadow-xl">
          <Text className="font-bold text-slate-800">{title}</Text>

          <Text className="text-slate-500">{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
