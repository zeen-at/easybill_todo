import * as Yup from "yup";

export const todoValidation = Yup.object().shape({
  title: Yup.string().required("Enter a task title"),
  date: Yup.date().required("Enter a timeline"),
  // time: Yup.date(),
  description: Yup.string(),
});
