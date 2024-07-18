import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import { RootState } from "../store";
import { completeTodo, deleteTodo } from "../todoSlice";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const TodoDetails = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const todos = useSelector((state: RootState) => state.todos);

  const { id, title, subtitle } = useLocalSearchParams();
  const handleEditTodo = () => {
    dispatch(completeTodo(id));
    toast.show("Task updated successfully", {
      type: "success",
      placement: "top",
      duration: 5000,
      animationType: "slide-in",
    });
    router.push("home");
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
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
      <Header title="Task Details" />
      <View className="items-center py-10 gap-4">
        <Text className="font-bold text-xl items-center">{title}</Text>
        <Text>{subtitle}</Text>
      </View>
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
