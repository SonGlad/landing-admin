import { StyledRegister } from "./Register.styled";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { SignupSchema } from "../../utils/validationSchemas";
import { ShowRules } from "../../utils/showRules";
import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/auth-operation";


export const Register = () => {
    const dispatch = useDispatch();
    const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },

        validationSchema: SignupSchema,

        onSubmit: (values) => {
            dispatch(register({
                username: values.name,
                email: values.email,
                password: values.password
            }))
            resetForm();
        },
    });

    const {
        showPassword,
        getInputClass,
        getInputAlert,
        getHidePassword,
    } = ShowRules(values, touched, errors);

    
    return(
        <StyledRegister>
            <div className="TitleContainer">
                <h1 className="singup-title">Sign up</h1>
                <p className="title-text">You need to register to use the service</p>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="DivInput">
                    <input
                        className={getInputClass("name")}
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={handleChange}
                        value={values.name.trim()}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("name")}
                </div>
                <div className="DivInput">
                    <input
                        className={getInputClass("email")}
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        onChange={handleChange}
                        value={values.email.trim()}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("email")}
                </div>
                <div className="DivInput" id="password">
                    <input
                        className={getInputClass("password")}
                        id="password"
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        value={values.password.trim()}
                        onBlur={handleBlur}
                        onKeyDown={handleChange}
                    />
                    {getInputAlert("password")}
                    {values.password && getHidePassword()}
                </div>
                <button className="ButtonNext" 
                    type="submit" 
                    disabled={!isValid}>
                    Sign Up
                </button>
            </form>

            <div className="DivContainerSingIn">
                <p className="SingInText">Do you already have an account?</p>
                <div className="LinkToSingIn">
                    <NavLink to="/signin">Sign in</NavLink>
                </div>
            </div>
        </StyledRegister>
    )
};