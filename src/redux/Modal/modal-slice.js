import { createSlice } from "@reduxjs/toolkit";
import { updateContactById } from "../Data/data-operation";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isCreateContactModal: false,
        isUpdateContactModal: false,
        isConfirmModal: false,
        updateContactModalData: null,
        error: null,
    },

    reducers: {
        openModalSettings: (state) => {
            state.isSettingsModal = true;
        },
        closeModalSettings: (state) => {
            state.isSettingsModal = false;
        },
        openModalCreateContact: (state) => {
            state.isCreateContactModal = true;
        },
        closeModalCreateContact: (state) => {
            state.isCreateContactModal = false;
        },
        openModalUpdateContact: (state) => {
            state.isUpdateContactModal = true;
        },
        closeModalUpdateContact: (state) => {
            state.isUpdateContactModal = false;
        },
        openModalConfirm: (state) => {
            state.isConfirmModal = true;
        },
        closeModalConfirm: (state) => {
            state.isConfirmModal = false;
        },
        setUpdateContactModalData: (state, action) => {
            state.updateContactModalData = action.payload;
        },
    },


    extraReducers: builder => {
        builder

        // UPDATE CONTACT BY ID////////
        .addCase(updateContactById.pending, state =>{
            state.error = null;
        })
        .addCase(updateContactById.fulfilled, (state, { payload }) => {
            state.updateContactModalData = payload;
            state.error = null;
        })
        .addCase(updateContactById.rejected, (state, {payload}) => {
            state.error = payload;
        })
    }
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalSettings,
    closeModalSettings,
    openModalCreateContact,
    closeModalCreateContact,
    openModalUpdateContact,
    closeModalUpdateContact,
    openModalConfirm,
    closeModalConfirm,
    setUpdateContactModalData,
} = modalSlice.actions;