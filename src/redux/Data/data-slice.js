import { createSlice } from "@reduxjs/toolkit";
import { 
    getAllContacts,
    getAllByResource, 
    createNewContact, 
    // updateContactById,
    updateNewContactById,
    deleteContactById,
} from "./data-operation";


const initialState = {
    contacts: [],
    contactsByResource: [],
    isLoading: false,
    error: null,
    filter: '',
    selectedCheckedCheckbox: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
  
    reducers: {
        onFilterChange: (state, {payload}) => {
            state.filter = payload    
        },

        toggleCheckboxState: (state, action) => {
            const {_id} = action.payload;
            const isSelected = state.selectedCheckedCheckbox.includes(_id);
            if (isSelected) {
                state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== _id);
            } else {
                state.selectedCheckedCheckbox.push(_id);
            }
        },

        toggleSelectAllCheckbox: (state) => {
            const filteredContactIds = state.contacts.filter((contact) => {
                return (
                    contact.name.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.lastName.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.email.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.phone.replace(/\D/g, '').includes(state.filter)
                );
            }).map((contact) => contact._id);
        
            if (state.selectedCheckedCheckbox.length === filteredContactIds.length) {
                state.selectedCheckedCheckbox = [];
            } else {
                state.selectedCheckedCheckbox = [...filteredContactIds];
            }
        },

        toggleSelectAllCheckboxDynamic: (state, action) => {
            const sortedContacts = action.payload;
        
            const filteredContactIds = sortedContacts.filter((contact) => {
                return (
                    contact.name.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.lastName.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.email.toLowerCase().includes(state.filter.toLowerCase()) ||
                    contact.phone.replace(/\D/g, '').includes(state.filter)
                );
            }).map((contact) => contact._id);
        
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
            state.contacts = payload
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getAllContacts.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.token = null;
          state.error = payload;
        })


        // GET ALL CONTACTS BY RESOURCE///////////
        .addCase(getAllByResource.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllByResource.fulfilled, (state, { payload }) => {
            state.contactsByResource = payload
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getAllByResource.rejected, (state, {payload}) => {
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

            const { resource } = payload;
            const contactsForResource = state.contactsByResource[resource] || [];
            contactsForResource.unshift(payload);
        
            state.contactsByResource = {
                ...state.contactsByResource,
                [resource]: contactsForResource,
            };

            state.isLoading = false;
            state.error = null;
        })
        .addCase(createNewContact.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        // UPDATE CONTACT BY ID////////
        // .addCase(updateContactById.pending, state =>{
        //     state.isLoading = true;
        //     state.error = null;
        // })
        // .addCase(updateContactById.fulfilled, (state, { payload }) => {
        //     const updatedIndex = state.contacts.items.findIndex(contact => contact.id === payload.id);
        //     if (updatedIndex !== -1) {
        //         state.contacts.items = state.contacts.items.map(contact => {
        //             if (contact.id === payload.id) {
        //                 return payload;
        //             }
        //             return contact;
        //         });
        //     }
        //     state.isLoading = false;
        //     state.error = null;
        // })
        // .addCase(updateContactById.rejected, (state, {payload}) => {
        //     state.isLoading = false;
        //     state.error = payload;
        // })


        // UPDATE NEW CONTACT BY ID////////
        .addCase(updateNewContactById.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateNewContactById.fulfilled, (state, { payload }) => {
            const index = state.contacts.findIndex(contact => contact._id === payload._id);
            if (index !== -1) {
                state.contacts[index] = payload;
            }

            for (const key in state.contactsByResource) {
                const contactsArray = state.contactsByResource[key];
                const contactIndex = contactsArray.findIndex(contact => contact._id === payload._id);
                if (contactIndex !== -1) {
                    state.contactsByResource[key][contactIndex] = payload;
                }
            }

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
            state.contacts = state.contacts.filter(({_id}) => _id !== payload._id);

            for (const key in state.contactsByResource) {
                state.contactsByResource[key] = state.contactsByResource[key].filter(({ _id }) => _id !== payload._id);
                if (state.contactsByResource[key].length === 0) {
                    delete state.contactsByResource[key];
                }
            }

            state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(_id => _id !== payload._id);

            state.isLoading = false;
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
    toggleSelectAllCheckboxDynamic,
} = dataSlice.actions;