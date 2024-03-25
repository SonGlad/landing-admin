import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const register = createAsyncThunk(
    'users/register',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('users/register', credentials);
            // token.set(response.data.token);
            toast.success(`Please check your email for verification`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'users/login',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('users/login', credentials);
            token.set(response.data.token);
            toast.success(`Welcome!`);
            return response.data;
        }
        catch(error){
            toast.error(`Oops. Your ${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk(
    'users/logout',
    async (_, thunkApi) => {
        try{
            await axios.post('users/logout');
            token.unset();
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }   
);


export const refreshCurrentUser = createAsyncThunk(
    'users/current',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null){
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try{
            token.set(persistedToken);
            const response = await axios.get('users/current');
            return response.data;
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const updateUserInfo = createAsyncThunk(
    'users/update',
    async (userData, thunkApi) => {
        try {
            const response = await axios.put(`users/update`, userData);
            toast.success('Your User information has been successfully updated');
            return response.data;
        } catch (error) {
            toast.error(`Oops... ${error.response.data.message}`);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const updateUserAvatar = createAsyncThunk(
    'users/avatars',
    async (formData, thunkApi) => {
      try {
        const response = await axios.patch(`users/avatars`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
            toast.info('Your User avatar has been successfully updated');
            return response.data;
        } catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);