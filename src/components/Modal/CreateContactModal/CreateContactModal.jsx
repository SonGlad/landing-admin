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


export const CreateContactModal = ({handleClickClose}) => {
    const {userRole} = useAuth();
    const [formChanged, setFormChanged] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');


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
            resource: userRole,
        },
        

        validationSchema: ContactFormSchema,
        

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
            console.log(values.name);
            console.log(values.surname);
            console.log(values.email);
            console.log(formattedNumber);
            console.log(values.resource);

            resetForm({
                values: {
                    name: '',
                    surname: '',
                    email: '',
                    phone: ''
                },
            })
            setPhoneNumber('')
        },
    });

    
    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);


    const handleCancel = () => {
        resetForm();
        setFormChanged(false);
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

                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Profit Goal</p>

                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Risk Tolerance</p>

                    </li> 
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Level of Trading</p>

                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Investment Range</p>

                    </li>
                    <li className="radio-btn-item">
                        <p className="radio-btn-item-title">Weekly Trading Hours</p>

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