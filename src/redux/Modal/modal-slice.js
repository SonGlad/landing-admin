import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isCreateContactModal: false,
        isUpdateContactModal: false,
        updateContactModalData: null,
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
        setUpdateContactModalData: (state, action) => {
            state.updateContactModalData = action.payload;
        },
    },
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalSettings,
    closeModalSettings,
    openModalCreateContact,
    closeModalCreateContact,
    openModalUpdateContact,
    closeModalUpdateContact,
    setUpdateContactModalData,
} = modalSlice.actions;