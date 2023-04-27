import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import DietPlanReducer from "../slices/dietPlanSlice";
import gymPlanReducer from "../slices/gymPlanSlice";
import chatReducer from "../slices/fitbotSlice";
import feedbackReducer from "../slices/feedbackSlice";
import testimonialReducer from "../slices/testimonialSlices";
import SocialReducer from "../slices/socialSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
        dietPlan : DietPlanReducer,
        gymPlan: gymPlanReducer,
        fitbotChat: chatReducer,
        feedback: feedbackReducer,
        testimonial:testimonialReducer,
        social:SocialReducer,
    }
})

export default store;