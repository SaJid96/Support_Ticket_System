import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState={
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//Register
export const register=createAsyncThunk('auth/register',async(user,thunkAPI)=>{

try {
    return await authService.register(user)
} catch (error) {
    const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})

//login


export const login=createAsyncThunk('auth/register',async(user,thunkAPI)=>{
console.log(user);
})
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{}
})

export default authSlice.reducer