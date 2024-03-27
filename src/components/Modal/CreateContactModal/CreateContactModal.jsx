import { StyledCreateContactModal } from "./CreateContactModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useFormik } from "formik";
import { ContactFormSchema } from "../../../utils/validationSchemas";
import { ShowRules } from "../../../utils/showRules";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { AsYouType } from 'libphonenumber-js';
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { createNewContact } from "../../../redux/Data/data-operation";
import { useDispatch } from "react-redux";


export const CreateContactModal = ({handleClickClose}) => {
    const {userRole} = useAuth();
    const [formChanged, setFormChanged] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
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
            surname: "",
            email: "",
            phone: phoneNumber,
            trading: "",
            profitGoal: "",
            riskTolerance: "",
            expirience: "",
            investment: "",
            time: "",
            resource: userRole,
        },
        

        validationSchema: ContactFormSchema,
        

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
            const tradingBoolean = Boolean(values.trading);

            const dataToSend = {
                name: values.name,
                lastName: values.surname,
                email: values.email,
                phone: formattedNumber,
                resource: values.resource
            };

            if (values.trading !== "") {
                dataToSend.trading = tradingBoolean;
            }
            if (values.profitGoal !== "") {
                dataToSend.profitGoal = values.profitGoal;
            }
            if (values.riskTolerance !== "") {
                dataToSend.riskTolerance = values.riskTolerance;
            }
            if (values.expirience !== "") {
                dataToSend.expirience = values.expirience;
            }
            if (values.investment !== "") {
                dataToSend.investment = values.investment;
            }
            if (values.time !== "") {
                dataToSend.time = values.time;
            }

            dispatch(createNewContact(dataToSend));

            setPhoneNumber('');
            formReset();
        },
    });


    const formReset = () => {
        resetForm({
            values: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                trading: '',
                profitGoal: '',
                riskTolerance: '',
                expirience: '',
                investment: '',
                time: '',
                resource: userRole,
            },
        });
    }   


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);


    const handleCancel = () => {
        formReset();
        setFormChanged(false);
        setPhoneNumber('')
    };

    useEffect(() => {
        if (
          values.name !== '' ||
          values.surname !== '' ||
          values.email !== '' ||
          values.phone !== ''
        ) {
            setFormChanged(true);
        } 
    },[values.name, values.surname, values.email, values.phone]);


    return(
        <StyledCreateContactModal>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New Contact</h1>
            <form className="create-contact-form" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="name">
                    <div className="DivInput">
                        <input
                            className={getInputClass("name")}
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            required
                            onChange={handleChange}
                            value={values.name.trim()}
                            onBlur={handleBlur}
                        />
                        {getInputAlert("name")}
                    </div>
                </label>
                <label className="form-label" htmlFor="surname">
                    <div className="DivInput">
                        <input
                            className={getInputClass("surname")}
                            type="text"
                            placeholder="Last Name"
                            id="surname"
                            name="surname"
                            required
                            onChange={handleChange}
                            value={values.surname.trim()}
                            onBlur={handleBlur}
                        />
                        {getInputAlert("surname")}
                    </div>
                </label>
                <label className="form-label" htmlFor="email">
                    <div className="DivInput">
                        <input 
                            className={getInputClass("email")}
                            type="email" 
                            placeholder='Email'
                            id='email'
                            name="email"
                            required
                            onChange={handleChange}
                            value={values.email.trim()}
                            onBlur={handleBlur}
                        />
                        {getInputAlert("email")}
                    </div>
                </label>
                <label className="form-label" htmlFor="phone">
                    <div className="DivInput">
                        <PhoneInput
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true,
                                id: "phone",
                            }}
                            onBlur= {handleBlur} 
                            value={phoneNumber}
                            onChange={phone => {
                                handleChange({ target: { name: 'phone', value: phone } });
                                setPhoneNumber(phone);
                            }}
                            containerClass = "form-label"
                            inputClass = {`form-field`}
                            buttonClass = "dropdown-cont"
                            country={'us'}
                            placeholder="Enter Phone Number"
                            autoFormat={true}
                            countryCodeEditable={false}
                            enableSearch={true}
                            disableSearchIcon={false}
                        />
                        {getInputAlert("phone")}
                    </div>
                </label>
                <ul className="radio-btn-list">
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Trading Experience</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="yes"
                                name="trading"
                                type="radio"
                                onChange={handleChange}
                                value={true}
                                onBlur={handleBlur}
                                checked={values.trading === "true"}
                            />
                            Yes
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="no"
                                name="trading"
                                type="radio"
                                onChange={handleChange}
                                value={false}
                                onBlur={handleBlur}
                                checked={values.trading === "false"}
                            />
                            No
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Profit Goal</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="conservative"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='conservative'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "conservative"}
                            />
                            Conservative
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="moderate"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='moderate'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "moderate"}
                            />
                            Moderate
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="aggressive"
                                name="profitGoal"
                                type="radio"
                                onChange={handleChange}
                                value='aggressive'
                                onBlur={handleBlur}
                                checked={values.profitGoal === "aggressive"}
                            />
                            Aggressive
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Risk Tolerance</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="low"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='low'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "low"}
                            />
                            Low
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="medium"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='medium'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "medium"}
                            />
                            Medium
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="high"
                                name="riskTolerance"
                                type="radio"
                                onChange={handleChange}
                                value='high'
                                onBlur={handleBlur}
                                checked={values.riskTolerance === "high"}
                            />
                            High
                        </label>
                    </li> 
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Level of Trading</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="beginner"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='beginner'
                                onBlur={handleBlur}
                                checked={values.expirience === "beginner"}
                            />
                            Beginner
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="novice"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='novice'
                                onBlur={handleBlur}
                                checked={values.expirience === "novice"}
                            />
                            Novice
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="intermediate"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='intermediate'
                                onBlur={handleBlur}
                                checked={values.expirience === "intermediate"}
                            />
                            Intermediate
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="advanced"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='advanced'
                                onBlur={handleBlur}
                                checked={values.expirience === "advanced"}
                            />
                            Advanced
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="expert"
                                name="expirience"
                                type="radio"
                                onChange={handleChange}
                                value='expert'
                                onBlur={handleBlur}
                                checked={values.expirience === "expert"}
                            />
                            Expert
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Investment Range</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="0-500"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='0-500'
                                onBlur={handleBlur}
                                checked={values.investment === "0-500"}
                            />
                            0$ - 500$
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="500-2500"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='500-2500'
                                onBlur={handleBlur}
                                checked={values.investment === "500-2500"}
                            />
                            500$ - 2500$
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="2500-5000"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='2500-5000'
                                onBlur={handleBlur}
                                checked={values.investment === "2500-5000"}
                            />
                            2500$ - 5000$
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="5000-10000"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='5000-10000'
                                onBlur={handleBlur}
                                checked={values.investment === "5000-10000"}
                            />
                            5000$ - 10000$
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="10000+"
                                name="investment"
                                type="radio"
                                onChange={handleChange}
                                value='10000+'
                                onBlur={handleBlur}
                                checked={values.investment === "10000+"}
                            />
                            &#62; 10000$
                        </label>
                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Weekly Trading Hours</p>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="0-5"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='0-5'
                                onBlur={handleBlur}
                                checked={values.time === "0-5"}
                            />
                            0-5 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="5-10"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='5-10'
                                onBlur={handleBlur}
                                checked={values.time === "5-10"}
                            />
                            5-10 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="10-15"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='10-15'
                                onBlur={handleBlur}
                                checked={values.time === "10-15"}
                            />
                            10-15 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="15-20"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='15-20'
                                onBlur={handleBlur}
                                checked={values.time === "15-20"}
                            />
                            15-20 Hours
                        </label>
                        <label className="LabelActivity" htmlFor="radio-btn">
                            <input
                                className="radio-btn-input"
                                id="20+"
                                name="time"
                                type="radio"
                                onChange={handleChange}
                                value='20+'
                                onBlur={handleBlur}
                                checked={values.time === "20+"}
                            />
                            &#62; 20 Hours
                        </label>
                    </li>
                </ul>
                <div className="ButtonContainer">
                    <button
                        className="SaveButton"
                        type="submit"
                        disabled={!isValid || !formChanged}
                    >
                        Save
                    </button>
                    <button className="CancelButton" type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </StyledCreateContactModal>
    )
};