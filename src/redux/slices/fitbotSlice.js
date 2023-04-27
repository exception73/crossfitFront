import axios from "axios";
import baseURL from "../../utils/baseURL";
import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    error: null,
    chat: {
        message:"Hello, How can I assist you?"
    },

}


export const fitbotAction = createAsyncThunk('chat', async (
    { message},
    { rejectWithValue, getState, dispatch }
) => {
    try {
        console.log(message)

        const token = getState()?.users?.userAuth?.userInfo?.user?.token;
        console.log(getState());
        console.log(token);
        
        const config = {
            headers: {
                token: `${token}`
            }
        }
        
        const { data } = await axios.post(`${baseURL}/chat`, {
            message,
        }, 
        config);

        console.log(data);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error?.message);
    }
})





const chatSlice = createSlice({
    name: "fitbotChat",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fitbotAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fitbotAction.fulfilled, (state, action) => {
            state.loading = false;
            state.chat = action.payload;
        });
        builder.addCase(fitbotAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});


const chatReducer = chatSlice.reducer;
export default chatReducer;
