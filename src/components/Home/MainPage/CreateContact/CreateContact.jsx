import { StyledCreateContact } from "./CreateContact.styled";
import { useDispatch } from "react-redux";
import { openModalCreateContact } from "../../../../redux/Modal/modal-slice";


export const CreateContact = () => {
    const dispatch = useDispatch();


    const OpenModal = () => {
        dispatch(openModalCreateContact())
    };


    return(
        <StyledCreateContact>
            <button type="button" className="creat-btn" onClick={OpenModal}>Create New Contact</button>
        </StyledCreateContact>
    )
};