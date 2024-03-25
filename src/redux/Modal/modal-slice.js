import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isSettingsModal: false,
        isCreateContactModal: false,
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
    },
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalSettings,
    closeModalSettings,
    openModalCreateContact,
    closeModalCreateContact,
} = modalSlice.actions;