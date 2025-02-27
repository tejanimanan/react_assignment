import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name:"counter",
    initialState:1,
    reducers:{
        setinc:(state,action)=>{
            return action.payload+1
            
        },
        setdec:(state,action)=>{
            return action.payload-1
        }
    }
    
})
export  const {setdec,setinc} = Counter.actions
export default Counter.reducer
// export default Counter.reducer

