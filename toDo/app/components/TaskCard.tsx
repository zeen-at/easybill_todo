import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { ITask } from "../types";

const TaskCard = ({ date, title, subtitle, id, priority }: ITask) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const handlePress = () => {
    router.push({
      pathname: `/(screens)/[id]`,
      params: {
        priority,
        id,
        date: new Date(date).toLocaleDateString(),
        title,
        subtitle,
      },
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-row items-center space-x-3 py-2 rounded-md">
        <Text className="font-bold text-slate-400">
          {date && formattedDate}
        </Text>
        <View
          className={`${
            priority === "High"
              ? "bg-red-500 text-white"
              : priority === "Medium"
                ? "bg-blue-400 text-white"
                : priority === "Low"
                  ? "bg-orange-400 text-white"
                  : "bg-slate-200"
          } p-3  w-[300px] shadow-xl `}
        >
          <View>
            <Text className="font-bold text-slate-800">{title}</Text>

            <Text className="text-slate-500">{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
