import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import SearchInput from "../components/SearchInput";
import { router } from "expo-router";
import CustomCard from "../components/CustomCard";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import EmptyState from "../components/EmptyState";
import { RootState } from "../store";

const home = () => {
  const dateToday = moment().format("MMMM DD, YYYY ");
  const timeToday = moment().format(" h:mm a");

  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView className="px-6 py-6 flex flex-1">
      <View className="flex gap-1 my-5">
        <Text className="text-xl font-bold tracking-wider">Hello, Zinat</Text>
        <Text className="text-slate-400">{dateToday}</Text>
        <Text className="text-slate-400">{timeToday}</Text>
      </View>

      <SearchInput initialQuery="" />

      <View className="my-5 flex-row justify-between items-center">
        <Text className="text-lg font-bold tracking-wider">Categories</Text>
        <TouchableOpacity onPress={() => router.push("myTasks")}>
          <Text className="text-slate-400">View All</Text>
        </TouchableOpacity>
      </View>

      <CustomCard title="Coding" subtitle="frontend" progress="1%" />

      <Text className="pt-6 pb-2 text-lg font-bold">My Tasks</Text>
      {/* <FlatList /> */}

      <View className="pb-6">
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

export default home;
