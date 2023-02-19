import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./toDoSlice";


const store = configureStore(
{
    reducer:reducer
}
)

export default store;