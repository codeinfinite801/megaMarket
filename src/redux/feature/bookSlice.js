import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    books:[]
}
export const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        
    }
})

export default bookSlice.reducer;