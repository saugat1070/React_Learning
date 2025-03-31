import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'auth',
    initialState :{
        // email: null,
        // username : null,
        // password : null
        user : null,
        token : null,
        status : null,
    },
    reducers:{
        setStatus(state,action){
            state.status = action.payload

        },
        setUser(state,action){
            state.user = action.payload;

        },
        setToken(state,action){
            state.token = action.payload
        }
    }

})

const {setStatus,setUser,setToken} = authSlice.actions