import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { todoValidation } from "../utils";
import { createTodo, completeTodo, deleteTodo } from "../todoSlice";
import { useDispatch } from "react-redux";
import { useToast } from "react-native-toast-notifications";

interface ITodo {
  title: string;
  //   date: Date;
  //   time: Date;
  description: string;
}
const todo: ITodo = {
  title: "",
  //   date: new Date(),
  //   time: new Date(),
  description: "",
};

const Create = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCreateTodo = (value: ITodo) => {
    console.log(value);
    dispatch(createTodo(value));
    toast.show("Task created successfully", {
      type: "success",
      placement: "top",
      duration: 10000,
      animationType: "slide-in",
    });
    router.push("home");
  };

  return (
    <SafeAreaView className="px-6 py-6">
      <ScrollView>
        <View className="flex flex-row space-x-28">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={20} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">New Task</Text>
        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <ScrollView className="py-10 ">
            <Formik
              initialValues={todo}
              onSubmit={(values) => handleCreateTodo(values)}
              validationSchema={todoValidation}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                setFieldValue,
              }) => (
                <>
                  <CustomInput
                    title="Title"
                    placeholder=""
                    value={values.title}
                    handleTextChange={handleChange("title")}
                    handleBlur={handleBlur("title")}
                    error={errors.title}
                  />
                  {/* <CustomDateTimePicker
                    mode={"date"}
                    value={values.date}
                    title={"Date"}
                    error={errors.date}
                    handleChange={(e) => {
                      setFieldValue("date", e);
                    }}
                    otherStyles="my-2"
                    handleBlur={handleBlur("date")}
                  /> */}
                  {/* <CustomDateTimePicker
                    mode={"time"}
                    value={values.time}
                    title={"Time"}
                    error={errors.time}
                    handleChange={(e) => {
                      setFieldValue("time", e);
                    }}
                    otherStyles="my-2"
                    handleBlur={handleBlur("time")}
                  /> */}
                  <CustomInput
                    isMultiline
                    title="Description"
                    placeholder={""}
                    value={values.description}
                    handleTextChange={handleChange("description")}
                    otherStyles="my-2"
                    numberOfLines={8}
                  />

                  <CustomButton
                    title="Create Task"
                    handlePress={handleSubmit}
                  />
                </>
              )}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>

      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
};

export default Create;
