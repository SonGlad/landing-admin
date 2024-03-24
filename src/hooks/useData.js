import { useSelector } from "react-redux";
import {
    selectContacts,
    selectLoading,
    selectFilter,
    selectCheckbox
} from "../redux/Data/data-selectors";


export const useData = () => {
    const isContacts = useSelector(selectContacts);
    const isLoadingContacts = useSelector(selectLoading);
    const isFilter = useSelector(selectFilter);
    const isCheckbox = useSelector(selectCheckbox);


    return {
        isContacts,
        isLoadingContacts,
        isFilter,
        isCheckbox
    }
};