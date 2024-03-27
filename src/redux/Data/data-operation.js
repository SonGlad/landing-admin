import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getAllContacts = createAsyncThunk(
    'api/contacts/all',
    async (_, thunkApi) => {

        try {
            const response = await axios.get('api/contacts/all');
            return response.data;

        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const getAllByResource = createAsyncThunk(
    'api/contacts/allbyresource',
    async (_, thunkApi) => {

        try {
            const response = await axios.get('api/contacts/allbyresource');
            return response.data;

        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const createNewContact = createAsyncThunk(
    'api/contacts/create',
    async (data, thunkApi) => {

        try {
            const response = await axios.post('api/contacts', data);
            return response.data;

        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const updateContactById = createAsyncThunk(
    'api/contacts/id',
    async ({ id, data }, thunkApi) => {

        try {
            const response = await axios.patch(`api/contacts/${id}`, data);
            return response.data;

        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        } 
    }
);


export const updateNewContactById = createAsyncThunk(
    'api/contacts/id/newContact',
    async ({ id, data }, thunkApi) => {
        try {
            const response = await axios.patch(`api/contacts/${id}/newContact`, data);
            return response.data;
            
        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        } 
    }
);


export const deleteContactById = createAsyncThunk(
    'api/contacts/id/delete',
    async (id, thunkApi) => {

        try {
            const response = await axios.delete(`api/contacts/${id}`);
            return response.data;

        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
