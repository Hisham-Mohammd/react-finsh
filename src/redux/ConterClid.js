import { createSlice } from "@reduxjs/toolkit";

let initialState ={count: 0 , userName:''}

let Conterclid = createSlice(
    {
        name:"ConterSlice",
        initialState,
        reducers :{
            increase:(state , acation)=>{
state.count+=1

            },
            decrease:(state)=>{
                state.count-=1

            }
        }
    }
)
export let CounterReduser =Conterclid.reducer
export let {increase ,decrease}=Conterclid.actions