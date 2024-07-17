import { View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface IQuery {
  initialQuery: string;
}

const SearchInput = ({ initialQuery }: IQuery) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="  w-full h-14 px-4  bg-slate-200 rounded-2xl space-x-4 focus:border-[#005689] items-center flex-row">
      <TextInput
        className="flex-1 mt-0.5 text-base"
        value={query}
        placeholder="Find your task"
        onChangeText={(e) => setQuery(e)}
        placeholderTextColor="#CDCDE0"
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Missing Query", "Input search query");
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Ionicons name="search-outline" size={16} color="slate-gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
