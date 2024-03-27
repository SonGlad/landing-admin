import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectCreateContactModal,
    selectUpdateContactModal,
    selectConfirmModal,
    selectItemIDForModal,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isCreateContactModal= useSelector(selectCreateContactModal);
    const isUpdateContactModal = useSelector(selectUpdateContactModal);
    const isConfirmModal = useSelector(selectConfirmModal);
    const updateContactModalData = useSelector(selectItemIDForModal);


    return {
        isSettingsModal,
        isCreateContactModal,
        isUpdateContactModal,
        isConfirmModal,
        updateContactModalData,
    }
};