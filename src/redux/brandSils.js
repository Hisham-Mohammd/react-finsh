import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState ={brand:[] , isLoading:false ,error:null}
export let getBrans =createAsyncThunk('brandslice/getBrans' , 
async()=>{
     let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
     .catch((err)=>err);
     return data.data
})
let brandslice =createSlice({
    name:'bransSlice',
    initialState,
    extraReducers:(bulider)=>{
      bulider.addCase(getBrans.pending ,(state ,acation)=>{
        state.isLoading=true

      })
      bulider.addCase(getBrans.fulfilled ,(state , acation)=>{
        state.brand=acation.payload
        state.isLoading=false
      })
    
    }
    

})
export let brandsReduser =brandslice.reducer