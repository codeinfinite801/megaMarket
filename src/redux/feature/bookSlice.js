import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    category:[]
}
export const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        
    }
})

export default bookSlice.reducer;