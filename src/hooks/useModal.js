import { useSelector } from "react-redux";
import {
    selectSettingsModal,
} from "../redux/Modal/modal-selectors.js";


export const useModal = () => {
    const isSettingsModal = useSelector(selectSettingsModal);


    return {
        isSettingsModal,
    }
};