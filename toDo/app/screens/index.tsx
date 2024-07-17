import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import { RootState } from "../store";
import { completeTodo, deleteTodo } from "../todoSlice";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const route = useRoute();

  console.log();
  const todos = useSelector((state: RootState) => state.todos);
  // const { id, title, subtitle } = route.params;

  const handleEditTodo = () => {
    // dispatch(completeTodo(id));
    toast.show("Task updated successfully", {
      type: "success",
      placement: "top",
      duration: 5000,
      animationType: "slide-in",
    });
    router.push("home");
  };
  const handleDeleteTodo = () => {
    // dispatch(deleteTodo(id));
    toast.show("Task deleted successfully", {
      type: "success",
      placement: "top",
      duration: 5000,
      animationType: "slide-in",
    });
    router.push("home");
  };

  return (
    <SafeAreaView className="px-6 py-6">
      <View className="flex flex-row space-x-28">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={20} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">TodoDetails</Text>
      </View>
      {/* <Text>{title}</Text> */}
      {/* <Text>{subtitle}</Text> */}
      <View className="flex flex-row justify-between">
        <TouchableOpacity
          onPress={handleEditTodo}
          className="py-3 px-3 items-center bg-emerald-700"
        >
          <Text className="text-white">Edit Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteTodo}
          className="py-3 px-3 items-center bg-red-700"
        >
          <Text className="text-white">Delete Todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoDetails;
