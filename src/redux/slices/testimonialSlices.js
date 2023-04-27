import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../utils/baseURL";

const initialState={
    loading:false,
    error:null,
    testimonial:{},
    testimonials:[],
}

export const allTestimonialsAction=createAsyncThunk('/all/testimonial',async({mess},{getState,rejectWithValue})=>{
    try {
        const token = getState()?.users?.userAuth?.userInfo?.user?.token;
        const config = {
            headers: {
                token: `${token}`
            }
        }
    
        const { data } = await axios.get(`${baseURL}/testimonial/all`,config);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error);
    }
})


export const createTestimonialsReview=createAsyncThunk('create/testimonial',async({heading,Description},{rejectWithValue,getState})=>{
    try {
        
        const token = getState()?.users?.userAuth?.userInfo?.user?.token;
        console.log(token);
        
        const config = {
            headers: {
                token: `${token}`
            }
        }
        console.log(heading,Description)
        const { data } = await axios.post(`${baseURL}/testimonial/review/new`, {
            captionDescription:Description,
            captionHeading:heading,
        },
        config);

        console.log("after successful request")

        console.log(data);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
        
    } catch (error) {
        console.log(error?.message)
        return rejectWithValue(error?.response?.data);
    }
})

const TestimonialSLice=createSlice({
    name: "Testimonials",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(allTestimonialsAction.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(allTestimonialsAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.testimonials=action.payload;
        })
        builder.addCase(allTestimonialsAction.rejected,(state,action)=>{
            state.error=action.payload;
        })

        
        
        builder.addCase(createTestimonialsReview.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createTestimonialsReview.fulfilled, (state,action) => {
            state.loading = false;
            state.testimonial=action.payload;
        });
        builder.addCase(createTestimonialsReview.rejected, (state, action) => {
            state.error = action.payload;
        });
    }
})

const testimonialReducer=TestimonialSLice.reducer;
export default testimonialReducer;