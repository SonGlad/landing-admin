import * as Yup from "yup";

// const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordRules = /^(?=.*[a-zA-Z\d@$!%*?&-]).{8,}$/;

// Длина пароля должна быть не менее 8 символов.
// Пароль может, но не обязан содержать один из специальный символ (например, !, @, #, $, %, -).

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(8, "Must be at least 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9")
    .required("Required"),
});


const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .required("Required"),
});


const SettingsSchema = Yup.object({
  currentPassword: Yup.string()
    .trim()
    .min(8, "Must be 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9"),
  newPassword: Yup.string()
    .trim()
    .min(8, "Must be 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9"),
});


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .required("The field is required"),
  surname: Yup.string()
    .trim()
    .min(2, 'Last name is too short')
    .max(40, 'Last name is too long')
    .required("The field is required"),
  email: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .email("Invalid email")
    .required("The field isrequired"),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number can only contain digits')
    .min(8, 'Number is too short')
    .max(15, 'Number is too long')
    .required("Please enter valid phone number"),
});


const UpdateContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .required("The field is required"),
  surname: Yup.string()
    .trim()
    .min(2, 'Last name is too short')
    .max(40, 'Last name is too long')
    .required("The field is required"),
  email: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .email("Invalid email")
    .required("The field isrequired"),
  phone: Yup.string()
    // .matches(/^\+?\d+$/, 'Phone number can only contain digits')
    .min(8, 'Number is too short')
    .max(20, 'Number is too long')
    .required("Please enter valid phone number"),
});


export {
  SignupSchema,
  SigninSchema,
  SettingsSchema,
  ContactFormSchema,
  UpdateContactFormSchema,
};
