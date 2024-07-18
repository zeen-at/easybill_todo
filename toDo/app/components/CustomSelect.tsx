import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ICustomSelect } from "../types";

const CustomSelect: React.FC<ICustomSelect> = ({
  value,
  title,
  options,
  error,
  otherStyles,
  handleChange,
}) => {
  const [select, setSelect] = useState(false);

  const toggleSelect = () => {
    setSelect(!select);
  };

  const onSelect = (value: string) => {
    setSelect(false);
    handleChange(value);
  };
  return (
    <>
      <View
        className={`${error ? "border border-b-red-700" : "border-none"} flex flex-col gap-3 items-start ${otherStyles}`}
      >
        <Text className="font-semibold text-md text-slate-700">{title}</Text>
        <TouchableOpacity
          onPress={toggleSelect}
          className={`flex-row w-full space-x-3 items-center`}
        >
          <TouchableOpacity
            onPress={toggleSelect}
            className={`flex-row w-full space-x-3 items-center`}
          >
            <TextInput
              value={value}
              className={`rounded-md w-full py-3 px-3 bg-slate-200 text-slate-700`}
              editable={false}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      {select && (
        <View>
          <Picker
            selectedValue={value}
            onValueChange={onSelect}
            dropdownIconColor="text-slate-700"
          >
            {options.map((option) => (
              <Picker.Item
                key={option.label}
                label={option.label}
                value={option.value}
                color={"text-slate-700"}
              />
            ))}
          </Picker>
        </View>
      )}
      {error ? (
        <Text className="text-red-700 text-base text-center my-1">{error}</Text>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomSelect;
