import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <Redirect href="/home" />
      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
};

export default index;
