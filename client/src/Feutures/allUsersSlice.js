import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
const initialState = {
    loading:false,
    list:[],
    error:''
}

export const fetchUsersList = createAsyncThunk('allUsersList/fetchUsersList',()=>{
    return axios.get('http://localhost:9910/users')
    .then((result) => result.data)
})

const userListSlice = createSlice({
    name:'allUsersList',
    initialState:initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsersList.pending,(state,action) =>{
            state.loading = true
        })
        builder.addCase(fetchUsersList.fulfilled,(state,action)=>{
            state.loading=false
            state.list = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsersList.rejected,(state,action)=>{
            state.loading=false
            state.list = []
            state.error = action.payload
        })
    }
})
export default userListSlice.reducer