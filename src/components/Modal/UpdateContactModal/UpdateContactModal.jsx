import {UpdateContactModalStyled} from "./UpdateContactModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useModal } from "../../../hooks/useModal";



export const UpdateContactModal = ({handleClickClose}) => {
    const {updateContactModalData} = useModal();
    console.log(updateContactModalData);

    
    return(
        <UpdateContactModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Update Contact</h1>
        </UpdateContactModalStyled>
    )
};