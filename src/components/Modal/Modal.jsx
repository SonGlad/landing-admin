import { ModalStyled } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import { 
    closeModalSettings, 
    closeModalCreateContact,
    closeModalUpdateContact, 
} from "../../redux/Modal/modal-slice";
import { useModal } from "../../hooks/useModal";
import { SettingsModal } from "./SettingsModal/SettingsModal";
import { CreateContactModal } from "./CreateContactModal/CreateContactModal";
import { UpdateContactModal } from "./UpdateContactModal/UpdateContactModal";


const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {isSettingsModal, isCreateContactModal, isUpdateContactModal} = useModal();


    const handleClickClose = useCallback(() => {
        if (isSettingsModal){
            dispatch(closeModalSettings());
        }
        if(isCreateContactModal) {
            dispatch(closeModalCreateContact());
        }
        if(isUpdateContactModal) {
            dispatch(closeModalUpdateContact());
        }
    },[dispatch, isCreateContactModal, isSettingsModal, isUpdateContactModal]);


    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);


    
    return createPortal(
        (isSettingsModal || isCreateContactModal || isUpdateContactModal) && (
            <ModalStyled onClick={handleBackdropClick}>
                {isSettingsModal && (
                    <SettingsModal handleClickClose={handleClickClose}/>
                )}
                {isCreateContactModal && (
                    <CreateContactModal handleClickClose={handleClickClose}/>
                )}
                {isUpdateContactModal && (
                    <UpdateContactModal handleClickClose={handleClickClose}/>
                )}
            </ModalStyled>
        ),
        modalRoot
    )
};
