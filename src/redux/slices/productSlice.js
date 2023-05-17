import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    productsStatus: "IDLE", //ayrı bir utils dosyası altında da tüm statusler tanımlanabilir
    productDetail: [], //başka sliceda yapmaya uğraşmamak için
    productDetailStatus: "IDLE"
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data
})
export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
})


export const getDetailProduct = createAsyncThunk("getDetailProduct", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //products
            .addCase(getProducts.pending, (state) => {
                state.productsStatus = "LOADING"
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = "SUCCESS"
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsStatus = "FAIL"
            })

            //detail

            .addCase(getDetailProduct.pending, (state) => {
                state.productDetailStatus = "LOADING"
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = "SUCCESS"
                state.productDetail = action.payload
            })
            .addCase(getDetailProduct.rejected, (state, action) => {
                state.productDetailStatus = "FAIL"
            })

            //category

            .addCase(getCategoryProducts.pending, (state) => {
                state.productsStatus = "LOADING"
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = "SUCCESS"
                state.products = action.payload
            })
            .addCase(getCategoryProducts.rejected, (state) => {
                state.productsStatus = "FAIL"
            })



    }
})

export default productSlice.reducer