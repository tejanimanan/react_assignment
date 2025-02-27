import { createSlice } from "@reduxjs/toolkit";

const TodoList = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        Addlist:(state,action)=>{
            // console.log(action.payload)
            state.push(action.payload)
        },
        deletelist:(state,action)=>{
            // console.log(action.payload)
            return state.filter((v)=>v.id!=action.payload)

        }
    }
})
export default  TodoList.reducer
export const {Addlist,deletelist} = TodoList.actions