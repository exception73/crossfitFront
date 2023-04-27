import axios from "axios";
import baseURL from "../../utils/baseURL";
import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    error: null,
    message: null,

}


export const feedbackAction = createAsyncThunk('feedback', async (
    { name, email, number, feedback},
    { rejectWithValue, getState, dispatch }
) => {
    try {
        console.log(name, email, number, feedback)

        const token = getState()?.users?.userAuth?.userInfo?.user?.token;
        console.log(getState());
        console.log(token);
        
        const config = {
            headers: {
                token: `${token}`
            }
        }
        
        const { data } = await axios.post(`${baseURL}/feedback`, {
            name, email, number, feedback
        }, 
        config);

        console.log(data);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error?.response?.data)
        return rejectWithValue(error?.response?.data);
    }
})





const  feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(feedbackAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(feedbackAction.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        });
        builder.addCase(feedbackAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});


const feedbackReducer = feedbackSlice.reducer;
export default feedbackReducer;
