import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    wordList: [],
    loading: false,
    error: ''
}

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (postData) => {
        let formData = new FormData()
        if(postData.media) {
            formData.append('media', postData.media)
        }
        formData.append('userID', postData.userID)
        if(postData.text) formData.append('text', postData.text)
        const response = await axios.post(url, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        if(!(response.status === 200)) {
            return Promise.reject(new Error(response.data))
        }
        return response.data
    }
)


export const MotsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        newMotReset: () => initialState,
    },
    extraReducers: (builder) => {
    }
})

export default MotsSlice.reducer