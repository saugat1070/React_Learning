import {createSlice} from '@reduxjs/toolkit'
import { setStatus } from './authSlice'
import STATUSES from '../src/global/statuses'
import {useSelector} from 'react-redux'
import axios from 'axios'

const blogSlice = createSlice({
    name:'blog',
    initialState:{
        // title :null,
        // description:null,
        // category:null,
        // subtitle:null,
        // image:null,
      data:null,
      status:null,
        
    },
    reducers:{
        // setTitle(state,action){
        //     state.title = action.payload
        // },
        // setDescription(state,action){
        //     state.description = action.payload
        // },
        // setCategory(state,action){
        //     state.description = action.payload
        // },
        // setSubtitle(state,action){
        //     state.subtitle = action.payload
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
        },
    

})

//making actions in state 
const {data,status} = blogSlice.actions
export default blogSlice.reducer;
const data_auth = useSelector((state)=>state.auth);

export  function AddBlog(data){
    return async function AddBlogthunk(dispatch){
        try {
            if(data_auth.data.STATUSES === STATUSES.SUCCESS){
                const response = await axios.post("https://react30.onrender.com/api/blog",data,{
                    'Content-Type':'multipart/form-data',
                    "Authorization" : localStorage.getItem('token'),
                })
                console.log(response.data);
                if(response.status === 200){
                    dispatch(setData(data));
                    dispatch(setStatus(STATUSES.ERROR))
                }
                else{
                    dispatch(setStatus(STATUSES.ERROR))
                }
                }
            
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))   
        }

}
}