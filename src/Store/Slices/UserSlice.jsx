import { createSlice } from "@reduxjs/toolkit";
// import { deletUser } from "../Actions";

const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deletUser(state,action){
            // console.log("hey delete")
            return []
        },
        // extraReducer(builder){
        //   builder.addCase(UserSlice.actions.deletUser,()=>{
        //     return [];
        //   })
        // }

    // extraReducer(builder){
    //       builder.addCase(deletUser,()=>{
    //         return [];
    //       })
    //     }
    },
});

//console.log(UserSlice.actions)

export default  UserSlice.reducer ;

export const {addUser,removeUser,deletUser} = UserSlice.actions;
// export const {addUser,removeUser} = UserSlice.actions;