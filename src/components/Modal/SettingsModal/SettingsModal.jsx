import { SettingsModalStyled } from "./SettingsModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import {ReactComponent as DownloadIcon} from "../../../images/svg-icons/download-new-photo.svg";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useState, useEffect} from "react";
import { SettingsSchema } from "../../../utils/validationSchemas";
import { ShowRules } from "../../../utils/showRules";
import { useAuth } from "../../../hooks/useAuth";
import { closeModalSettings } from "../../../redux/Modal/modal-slice";
import { isSettingsUpdatedtoFalse } from "../../../redux/Auth/auth-slice";
import { updateUserInfo, updateUserAvatar } from "../../../redux/Auth/auth-operation";



export const SettingsModal = ({handleClickClose}) => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const [formChange, setFormChange] = useState(false);
    const {userAvatarURL, isSettingsUpdated} = useAuth();

    
    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        setValues,
        resetForm,
    } = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            photo: undefined,
        },
        

        validationSchema: SettingsSchema,
        

        onSubmit: (values) => {
            if(formChange){
                dispatch(updateUserInfo({
                    password: values.currentPassword,
                    newPassword: values.newPassword, 
                }))
                setTimeout(() => {
                    setFormChange(false);
                    resetForm();
                }, 500);
            }

            if (selectedFile !== null) {
                const avatarFile = values.photo;
                const formData = new FormData();
                formData.append('avatarURL', avatarFile);
                dispatch(updateUserAvatar(formData));
                setSelectedFile(null);
                setFormChange(false)
            }
        },
    });

    
    const {
        showPassword,
        showPasswordNew,
        getInputClass,
        getInputAlert,
        getHidePassword,
        getHidePasswordNew, 
    } = ShowRules(values, touched, errors);


    const handleCancel = () => {
        resetForm();
        setFormChange(false);
        setSelectedFile(null)
    };


    useEffect(() => {
        if(isSettingsUpdated){
            dispatch(closeModalSettings());
            dispatch(isSettingsUpdatedtoFalse());
        }
    },[dispatch, isSettingsUpdated])


    useEffect(() => {
        if (
          values.currentPassword !== "" &&
          values.newPassword !== ""
        ) {
          setFormChange(true);
        } 
    },[values.currentPassword, values.newPassword]);


    return(
        <SettingsModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Settings</h1>
            <form className="settings-form" onSubmit={handleSubmit}>
                <div className="DivInput" id="currentPassword">
                    <input
                        className={getInputClass("currentPassword")}
                        id="currentPassword"
                        name="currentPassword"
                        placeholder="Current Password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        value={values.currentPassword.trim()}
                        onBlur={handleBlur}
                        onKeyDown={handleChange}
                    />
                    {getInputAlert("currentPassword")}
                    {values.currentPassword && getHidePassword()}
                </div>
                <div className="DivInput" id="newPassword">
                    <input
                        className={getInputClass("newPassword")}
                        id="newPassword"
                        name="newPassword"
                        placeholder="New Password"
                        type={showPasswordNew ? "text" : "password"}
                        onChange={handleChange}
                        value={values.newPassword.trim()}
                        onBlur={handleBlur}
                        onKeyDown={handleChange}
                    />
                    {getInputAlert("newPassword")}
                    {values.newPassword && getHidePasswordNew()}
                </div>
                <div className="FileContainer">
                    Your Avatar
                    <input
                        className="Input "
                        name="photo"
                        type="file"
                        id="photo"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={(event) => {
                        handleChange(event);
                        const file = event.currentTarget.files[0];
                        setValues((prevValues) => ({ ...prevValues, photo: file }));
                        setSelectedFile(URL.createObjectURL(file));
                        }}
                        onBlur={handleBlur}
                    />
                    <label className="Label label-for-avatar" htmlFor="photo">
                        <div className="Thumb">
                        <img className="AvaImg" src={selectedFile || userAvatarURL} alt="userAvatar" />
                        </div>
                        <div className="DownloadPhoto">
                        <DownloadIcon className="download-svg"/>
                            Download new photo
                        </div>
                    </label>
                </div>
                <div className="ButtonContainer">
                    <button
                        className="SaveButton"
                        type="submit"
                        disabled={!isValid || (!formChange && selectedFile === null)}
                    >
                        Save
                    </button>
                    <button className="CancelButton" type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </SettingsModalStyled>
    )
};