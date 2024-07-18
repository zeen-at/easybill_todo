import * as Yup from "yup";
import { IOptions } from "../types";

export const todoValidation = Yup.object().shape({
  title: Yup.string().required("Enter a task title"),
  date: Yup.date().required("Enter a timeline"),
  priority: Yup.string(),
  description: Yup.string(),
});

export const Priority: IOptions[] = [
  { label: "Priority", value: "" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];
