import { createSlice } from '@reduxjs/toolkit';
import { setStatus as setAuthStatus, setStatus, setToken } from './authSlice'; // Renamed to avoid conflict
import STATUSES from '../src/global/statuses'; // Ensure the path is correct
import { useSelector } from 'react-redux';
import axios from 'axios';
import API from '../https';
import { data } from 'react-router-dom';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
        setBlogStatus(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setData, setBlogStatus } = blogSlice.actions; // export const {reducer name not other} = SliceNmae.reducer
export default blogSlice.reducer;


export function BlogSlice(data) {
    return async function BlogSliceThunk(dispatch) {
        try {
            const response = await axios.post(
                'https://react30.onrender.com/api/user/blog',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': localStorage.getItem('token'),
                    },
                }
            );
            console.log(response.data);
            if (response.status === 201) {
                dispatch(setBlogStatus(STATUSES.SUCCESS));
            } else {
                dispatch(setBlogStatus(STATUSES.ERROR));
            }

        } catch (error) {
            console.error('Error in BlogSliceThunk:', error); // Added error logging
            dispatch(setBlogStatus(STATUSES.ERROR));
        }
    };
}

export function fetchBlog() {
    return async function fetchBlogThunk(dispatch) {
        dispatch(setBlogStatus(STATUSES.LOADING));
        try {
            const response = await API.get('blog', data);
            if (response.status === 200 && response.data.token) {
                // dispatch(setData(data));
                console.log(response.data)
                dispatch(setData(response.data.data));
                dispatch(setBlogStatus(STATUSES.LOADING));
            }
            else {
                dispatch(setBlogStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setBlogStatus(STATUSES.ERROR));
        }
    }
}

export function deleteBlog(id, token) {
    return async function deleteBlogThunk(dispatch) {

        try {
            const response = await API.delete(`blog/${id}`, {
                headers: {
                    token: token,
                }
            })
            if (response.status === 200) {
                
                dispatch(setStatus(STATUSES.SUCCESS));
            }

            else {
                dispatch(setBlogStatus(STATUSES.SUCCESS));
            }
        }
        
     catch (error) {
        dispatch(setBlogStatus(STATUSES.ERROR));

    }
}
}
