import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

interface IDateTime {
  mode: "date" | "time";
  value: any;
  error: any;
  title: string;
  handleChange: (date: Date) => void;
  otherStyles?: string;
  handleBlur: (field: string) => void;
}
interface DateTimeFormatOptions {
  hour?: "2-digit" | "numeric";
  minute?: "2-digit" | "numeric";
  hour12?: boolean;
}

const CustomDateTimePicker = ({
  mode,
  value,
  title,
  error,
  handleChange,
  otherStyles,
}: IDateTime) => {
  const [showPicker, setShowPicker] = useState(false);

  const minimumDate = new Date();
  const options: DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedValue =
    mode === "date"
      ? value.toDateString()
      : value.toLocaleTimeString([], options);

  const handleToggle = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setShowPicker(false);
    if (event.type == "set" && selectedDate) {
      const currentDate = selectedDate;
      handleChange(currentDate);
    }
  };
  return (
    <>
      <View
        className={` ${error ? "border border-pink" : "border-none"}flex flex-col gap-3 items-start ${otherStyles}`}
      >
        <Text className="font-semibold text-md text-slate-700">{title}</Text>
        <TouchableOpacity
          onPress={handleToggle}
          className="rounded-md w-full py-3 px-3 bg-slate-200"
        >
          <TextInput value={formattedValue} editable={false} />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            mode={mode}
            display="default"
            onChange={handleDateChange}
            value={value || new Date()}
            minimumDate={minimumDate}
          />
        )}
      </View>
      {error ? (
        <Text className="text-red-700 text-base text-center my-3">{error}</Text>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomDateTimePicker;
