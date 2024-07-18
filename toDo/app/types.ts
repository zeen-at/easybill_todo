import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export interface IOptions {
  label: string;
  value: string;
}

export interface ICustomSelect {
  value: string;
  error?: string;
  handleChange: (text: string) => void;
  options: IOptions[];
  title: string;
  otherStyles: string;
}

export interface IButton {
  handlePress: () => void;
  title: string;
}

export interface ICard {
  title: string;
  subtitle: string;
  progress: string;
}

export interface IDateTime {
  mode: "date" | "time";
  value: any;
  error: any;
  title: string;
  handleChange: (date: Date) => void;
  otherStyles?: string;
  handleBlur: (field: string) => void;
}
export interface DateTimeFormatOptions {
  hour?: "2-digit" | "numeric";
  minute?: "2-digit" | "numeric";
  hour12?: boolean;
}
export interface IForm {
  error?: string;
  title: string;
  placeholder: string;
  value: string;
  isMultiline?: boolean;
  handleTextChange: (text: string) => void;
  handleBlur?: (text: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  otherStyles?: string;
  numberOfLines?: number;
  otherTextStyles?: string;
}

export interface IEmpty {
  title: string;
  subtitle: string;
}

export type IHeader = {
  title: string;
};

export interface ITask {
  priority: string;
  date: Date;
  title: string;
  subtitle: string;
  id: string;
}
