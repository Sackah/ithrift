import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name cannot be empty")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot exceed 12 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password cannot be empty")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  phone: yup
    .string()
    .required("Phone number cannot be empty")
    .length(9, "Phone number must be 9 digits"),
});

export const signInSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number cannot be empty")
    .length(9, "Phone number must be 9 digits"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot exceed 12 characters"),
});
