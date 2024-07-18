import { View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import TaskCard from "../components/TaskCard";
import EmptyState from "../components/EmptyState";

import { RootState } from "../store";
import Header from "../components/Header";

const MyTasks = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView className="px-6 py-6">
      <Header title="My tasks" />
      <View className="my-4">
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              date={item.date}
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
