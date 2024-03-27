import { StyledConfirmModal } from "./ConfirmModal.styled";
import { ReactComponent as CloseIcon } from "../../../images/svg-icons/close.svg";
import { useData } from "../../../hooks/useData";
import { useDispatch } from "react-redux";
import { deleteContactById } from "../../../redux/Data/data-operation";
import { closeModalConfirm } from "../../../redux/Modal/modal-slice";


export const ConfirmModal = ({handleClickClose}) => {
    const { isCheckbox } = useData();
    const dispatch = useDispatch();

    
    const handleDeleteAllSelected = () => {
        isCheckbox.forEach((_id) => {
          dispatch(deleteContactById(_id));
          dispatch(closeModalConfirm());
        });
    };
    

    return(
        <StyledConfirmModal>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="close-icon" width={12} height={12}/>
            </button>
            <h1 className="form-title">Are you sure you want to delete all selected contacts?</h1>
            <div className="ButtonContainer">
                    <button className="SaveButton" type="submit" onClick={handleDeleteAllSelected}>
                        Yes
                    </button>
                    <button className="CancelButton" type="button" onClick={handleClickClose}>
                        No
                    </button>
                </div>
        </StyledConfirmModal>
    )
};