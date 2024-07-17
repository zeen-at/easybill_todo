import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import TaskCard from "../components/TaskCard";
import EmptyState from "../components/EmptyState";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { RootState } from "../store";

const MyTasks = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView className="px-6 py-6">
      <View className="flex flex-row space-x-28">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={20} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">My Tasks</Text>
      </View>
      <View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              time={""}
              title={item.title}
              subtitle={item.description}
              id={item.id}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Available Task"
              subtitle="Create a task to do"
            />
          )}
        />
      </View>
      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
};

export default MyTasks;
