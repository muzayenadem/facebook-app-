import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "../profileSlice";
import allUsersReducer from "../allUsersSlice";
import tokenReducer from '../loggedInAuthSlice'
const store = configureStore({
    reducer:{
        profile:profileReducer,
        allUsersList:allUsersReducer,
        token:tokenReducer
    }
})

export default store