import axios from "axios";
import baseURL from "../../utils/baseURL";
import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    error: null,
    gymPlanImage: null,

}


export const gymPlanAction = createAsyncThunk('gym/plan', async (
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
        
        const { data } = await axios.post(`${baseURL}/plan`, {
            message,
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





const gymPlanSlice = createSlice({
    name: "gymPlan",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(gymPlanAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(gymPlanAction.fulfilled, (state, action) => {
            state.loading = false;
            state.gymPlanImage = action.payload;
        });
        builder.addCase(gymPlanAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});


const gymPlanReducer = gymPlanSlice.reducer;
export default gymPlanReducer;
