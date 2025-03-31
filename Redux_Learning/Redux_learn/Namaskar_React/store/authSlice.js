import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import STATUSES from '../src/global/statuses';

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

export const {setStatus,setUser,setToken} = authSlice.actions;
export default authSlice.reducer;

export  function register(data){
    return async function registerThunk(dispatch){ 
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.post(
                "https://react30.onrender.com/api/user/register",
                data
            );
            if(response.status === 200){
                dispatch(STATUSES.SUCCESS);
                dispatch(setUser(data));
        }
        else{
            dispatch(setStatus(STATUSES.ERROR));
        }
        
       } catch (error) {
        dispatch(setStatus(STATUSES.ERROR));

        
       }
    }
}

export function login(data){
    return async function loginThunk(dispatch){
       try {
        const response = await axios.post(
            'https://react30.onrender.com/api/user/login',
            data
        );
        if(response.status === 200){
            dispatch(setToken(response?.data.token));
            dispatch(STATUSES.SUCCESS);
        }
        else{
            dispatch(STATUSES.ERROR);

        }
        
       } catch (error) {
        dispatch(STATUSES.ERROR);
        
       }
    }
}