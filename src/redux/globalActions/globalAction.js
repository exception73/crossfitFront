import { createAsyncThunk } from "@reduxjs/toolkit";


//reset error action
 export const resetErrAction = createAsyncThunk("resetErr-action",() => {
    return {};
 })


 // reset succes action
 export const resetSuccessAction = createAsyncThunk("resetSuccess-action",() => {

   return {};

 });
 