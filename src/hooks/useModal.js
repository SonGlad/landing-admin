import { useSelector } from "react-redux";
import {
    selectSettingsModal,
    selectCreateContactModal,
    selectUpdateContactModal,
    selectItemIDForModal,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);
    const isCreateContactModal= useSelector(selectCreateContactModal);
    const isUpdateContactModal = useSelector(selectUpdateContactModal);
    const updateContactModalData = useSelector(selectItemIDForModal);


    return {
        isSettingsModal,
        isCreateContactModal,
        isUpdateContactModal,
        updateContactModalData,
    }
};