import { createSlice } from '@reduxjs/toolkit'

export const counterSlice=createSlice(  // immer libery we access and mutate it
    {
      name:"counter",
      initialState:{value:0},
      reducers:{ 
        
    increment:(state)=>{
        state.value += 1;
    },
    decrement: (state)=>{
        state.value -= 1;
    } 

    }

}


);
export const{increment, decrement} =counterSlice.actions
export default counterSlice.reducer