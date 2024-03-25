import { StyledCreateContactModal } from "./CreateContactModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useFormik } from "formik";
import { SettingsSchema } from "../../../utils/validationSchemas";
// import { ShowRules } from "../../../utils/showRules";



export const CreateContactModal = ({handleClickClose}) => {

    const {
        // values,
        // errors,
        // touched,
        // isValid,
        // handleBlur,
        // handleChange,
        handleSubmit,
        // setValues,
        // resetForm,
    } = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            photo: undefined,
        },
        

        validationSchema: SettingsSchema,
        

        onSubmit: (values) => {
            console.log(values);
        },
    });

    
    // const {
    //     showPassword,
    //     showPasswordNew,
    //     getInputClass,
    //     getInputAlert,
    //     getHidePassword,
    //     getHidePasswordNew, 
    // } = ShowRules(values, touched, errors);


    // const handleCancel = () => {
    //     resetForm();
    //     setFormChange(false);
    //     setSelectedFile(null)
    // };


    // useEffect(() => {
    //     if(isSettingsUpdated){
    //         dispatch(closeModalSettings());
    //         dispatch(isSettingsUpdatedtoFalse());
    //     }
    // },[dispatch, isSettingsUpdated])


    // useEffect(() => {
    //     if (
    //       values.currentPassword !== "" &&
    //       values.newPassword !== ""
    //     ) {
    //       setFormChange(true);
    //     } 
    // },[values.currentPassword, values.newPassword]);


    return(
        <StyledCreateContactModal>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Create New Contact</h1>
            <form className="create-contact-form" onSubmit={handleSubmit}>

            </form>
        </StyledCreateContactModal>
    )
};