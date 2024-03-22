import * as Yup from "yup";

// const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordRules = /^(?=.*[a-zA-Z\d@$!%*?&-]).{8,}$/;

// Длина пароля должна быть не менее 8 символов.
// Пароль может, но не обязан содержать один из специальный символ (например, !, @, #, $, %, -).

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9")
    .required("Required"),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});



export {
  SignupSchema,
  SigninSchema,
};
