import { View, Text, TextInput } from "react-native";
import React from "react";
import { IForm } from "../types";

const CustomInput = ({
  error,
  title,
  handleTextChange,
  handleBlur,
  value,
  placeholder,
  otherStyles,
  otherTextStyles,
  isMultiline,
  numberOfLines,
}: IForm) => {
  return (
    <>
      <View
        className={`${error ? "border border-b-red-700" : "border-none"} flex flex-col gap-3 items-start ${otherStyles}`}
      >
        <Text className="font-semibold text-md text-slate-700">{title}</Text>
        <TextInput
          numberOfLines={numberOfLines}
          multiline={isMultiline}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          className={`rounded-md w-full py-3 px-3 bg-slate-200 ${otherTextStyles}`}
        />
      </View>
      {error ? (
        <Text className="text-red-700 text-base text-center my-1">{error}</Text>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomInput;
