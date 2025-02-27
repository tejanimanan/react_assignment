import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userData = createSlice({
    name:"userdata",
    initialState:[],
    reducers:{
        Adddat:(state,action)=>{
            console.log(action.payload)
            // state.push(action.payload)
            return action.payload
        },
        addUser:(state,action)=>{

            console.log(action.payload)
            console.log(JSON.stringify(action.payload))
            fetch('http://localhost:5001/user',{
                method:"post",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(action.payload)
            })

            state.push(action.payload)
        },
        RemoveUser:(state,action)=>{
            console.log(action.payload)
            fetch('http://localhost:5001/user/'+action.payload,{
                method: "DELETE", 
            })
            return state.filter((v)=>v.id!=action.payload)
        },
        edituser(state,action){
            console.log(action.payload)
            fetch(`http://localhost:5001/user/${action.payload.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })

        }

    }
})
export default userData.reducer
export const {Adddat,addUser,RemoveUser,edituser} = userData.actions