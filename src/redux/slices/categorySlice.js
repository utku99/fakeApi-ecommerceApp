import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    categories: []
}

export const getCategories = createAsyncThunk("getCategories", async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json()
    return data
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => { //sadece fullfilled durumuna bakılır
            state.categories = action.payload
        })
    }
})

export default categorySlice.reducer