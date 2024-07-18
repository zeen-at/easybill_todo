import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Priority, todoValidation } from "../utils";
import { createTodo } from "../todoSlice";
import { useDispatch } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import Header from "../components/Header";
import CustomSelect from "../components/CustomSelect";

interface ITodo {
  title: string;
  date: Date;
  priority: string;
  description: string;
}
const todo: ITodo = {
  title: "",
  date: new Date(),
  priority: "",
  description: "",
};

const Create = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCreateTodo = (value: ITodo) => {
    console.log(value, "dd");

    dispatch(createTodo(value));
    toast.show("Task created successfully", {
      type: "success",
      placement: "top",
      duration: 5000,
      animationType: "slide-in",
    });
    router.push("home");
  };

  return (
    <SafeAreaView className="px-6 py-6">
      <ScrollView>
        <Header title="New Task" />
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
                  <CustomDateTimePicker
                    mode={"date"}
                    value={values.date}
                    title={"Date"}
                    error={errors.date}
                    handleChange={(e) => {
                      setFieldValue("date", e);
                    }}
                    otherStyles="my-2"
                    handleBlur={handleBlur("date")}
                  />
                  <CustomSelect
                    value={values.priority}
                    error={errors.priority}
                    handleChange={handleChange("priority")}
                    title="Priority"
                    otherStyles="my-2"
                    options={Priority}
                  />
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
