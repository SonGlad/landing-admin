import { StyledLogin } from "./Login.styled";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { SigninSchema } from "../../utils/validationSchemas";
import { ShowRules } from "../../utils/showRules";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/auth-operation";


export const Login = () => {
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
                email: "",
                password: "",
            },
    
            validationSchema: SigninSchema,
    
            onSubmit: (values) => {
                dispatch(logIn(values))
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
        <StyledLogin>
            <div className="TitleContainer">
                <h1 className="singup-title">Sign in</h1>
                <p className="title-text">You need to login to use the service</p>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="DivInput">
                    <input
                        className={getInputClass("email")}
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
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
                        value={values.password}
                        onBlur={handleBlur}
                        onKeyDown={handleChange}
                    />
                    {getInputAlert("password")}
                    {values.password && getHidePassword()}
                </div>
                <button className="ButtonNext" 
                    type="submit" 
                    disabled={!isValid}>
                    Sign In
                </button>
            </form>

            <div className="DivContainerSingIn">
                <p className="SingInText">If you don't have an account yet</p>
                <div className="LinkToSingIn">
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </div>
        </StyledLogin>
    )
};