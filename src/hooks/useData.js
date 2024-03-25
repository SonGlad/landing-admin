import { useSelector } from "react-redux";
import {
    selectContacts,
    selectContactsByResource,
    selectLoading,
    selectFilter,
    selectCheckbox
} from "../redux/Data/data-selectors";


export const useData = () => {
    const isContacts = useSelector(selectContacts);
    const isContactsByResource = useSelector(selectContactsByResource)
    const isLoadingContacts = useSelector(selectLoading);
    const isFilter = useSelector(selectFilter);
    const isCheckbox = useSelector(selectCheckbox);


    return {
        isContacts,
        isContactsByResource,
        isLoadingContacts,
        isFilter,
        isCheckbox
    }
};