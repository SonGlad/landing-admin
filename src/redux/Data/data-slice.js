import { createSlice } from "@reduxjs/toolkit";
import { 
    getAllContacts, 
    createNewContact, 
    updateContactById,
    updateNewContactById,
    deleteContactById,
} from "./data-operation";


const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
    selectedCheckedCheckbox: [],
    // selectedItemIDForModal: '',
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
  
    reducers: {
        onFilterChange: (state, {payload}) => {
            state.filter = payload    
        },

        toggleCheckboxState: (state, action) => {
            const { contactId } = action.payload;
            const isSelected = state.selectedCheckedCheckbox.includes(contactId);
            if (isSelected) {
                state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== contactId);
            } else {
                state.selectedCheckedCheckbox.push(contactId);
            }
        },

        toggleSelectAllCheckbox: (state) => {
            const filteredContactIds = state.contacts.items.filter((contact) => {
                return (
                contact.name.toLowerCase().includes(state.filter.toLowerCase()) ||
                contact.number.includes(state.filter)
                );
            }).map((contact) => contact.id);
        
            if (state.selectedCheckedCheckbox.length === filteredContactIds.length) {
                state.selectedCheckedCheckbox = [];
            } else {
                state.selectedCheckedCheckbox = [...filteredContactIds];
            }
        },
    },


    extraReducers: builder => {
        builder

        // GET ALL CONTACTS///////////
        .addCase(getAllContacts.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllContacts.fulfilled, (state, { payload }) => {
            state.contacts = payload.contacts
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getAllContacts.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.token = null;
          state.error = payload;
        })


        //CREATE NEW CONTACT/////////////// 
        .addCase(createNewContact.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(createNewContact.fulfilled, (state, {payload}) => {
            state.contacts.unshift(payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(createNewContact.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        // UPDATE CONTACT BY ID////////
        .addCase(updateContactById.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateContactById.fulfilled, (state, { payload }) => {
            const updatedIndex = state.contacts.items.findIndex(contact => contact.id === payload.id);
            if (updatedIndex !== -1) {
                state.contacts.items = state.contacts.items.map(contact => {
                    if (contact.id === payload.id) {
                        return payload;
                    }
                    return contact;
                });
            }
        })
        .addCase(updateContactById.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        // UPDATE NEW CONTACT BY ID////////
        .addCase(updateNewContactById.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateNewContactById.fulfilled, (state, { payload }) => {

            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateNewContactById.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })


        // DELETE CONTACT BY ID////////
        .addCase(deleteContactById.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteContactById.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.contacts.items = state.contacts.filter(({id}) => id !== payload)
            state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== payload);
            state.error = null;
        })
        .addCase(deleteContactById.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
});



export const dataReducer = dataSlice.reducer;


export const {
    onFilterChange, 
    toggleCheckboxState,
    toggleSelectAllCheckbox,
} = dataSlice.actions;