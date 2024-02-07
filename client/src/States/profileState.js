import React from "react";
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'

import { fetchProfile } from "../Feutures/profileSlice";

let profile;

 
const profile2 =  () =>{
    const dispatch =  useDispatch()
 
 useEffect(()=>{
    dispatch(fetchProfile())
 },[])

    
    const sellector = useSelector((state)=> state.profile)
    
    profile = sellector.profile

   
}
profile2()
export default profile