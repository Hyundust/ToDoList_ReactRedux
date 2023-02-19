import { createSlice } from "@reduxjs/toolkit";

//state initialization
const initialState = [];

//generating reducer with create slice fnction
const AddToDoReducer = createSlice({



    name:"todos",
    initialState,
    reducers: {
            
            addTodos:(state, action) => {
                state.push(action.payload);
                return state;
            },
            removeTodos:(state,action)=>{
                return state.filter(item=>item.id!==action.payload)
            },
            updateTodos:(state,action)=>{
                return state.map(todo=>{
                    if(todo.id===action.payload.id){
                        return {
                            ...todo,
                            item:action.payload.item
                            };
                }
                return todo;
            })
            },
            completedTodos:(state,action)=>{
                return state.map(todo=>{
                    if(todo.id===action.payload){
                        return {
                            ...todo,
                            completed:true
                            };
                }
                return todo;

            })
            
        }
        }

})
export const {addTodos ,removeTodos,updateTodos,completedTodos} = AddToDoReducer.actions;
export const reducer = AddToDoReducer.reducer;