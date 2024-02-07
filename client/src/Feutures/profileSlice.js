import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const initialState = {
    loading :false,
    profile:[],
    error:''
}


 export const fetchProfile = createAsyncThunk('profle/fetchProfile',()=>{
    return axios.get('http://localhost:9910/users')
    .then(result => {
        return result.data.find((user => user.emailOrPhone == 'chala@gmail.com'))
    })
 })

 const profileSlice = createSlice({
    name:'profile',
    initialState:initialState,
    extraReducers:builder =>{
        builder.addCase(fetchProfile.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProfile.fulfilled,(state,action)=>{
            state.loading = false
            state.profile = action.payload
            state.error=''
        })
            builder.addCase(fetchProfile.rejected,(state,action)=>{
            state.loading = false
            state.profile = []
            state.error=action.payload
        })
    }
 })

 export default profileSlice.reducer