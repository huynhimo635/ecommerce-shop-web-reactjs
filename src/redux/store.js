import { configureStore } from "@reduxjs/toolkit"

import productModalSlice from "./product-modal/productModalSlice"
import cartItemsSlice from "./shopping-cart/cartItemsSlice"
import loadingSlice from "./loadingSlice"

import loginSlice from "./loginSlice"
import registerSlice from "./registerSlice"
import getMeReducer from "./user/getMeSlice"

import categoryDataReducer from "./data-loading/categoryDataSlice"
import productDataReducer from "./data-loading/productDataSlice"

export const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice,
        getMe: getMeReducer,

        loading: loadingSlice,
        productModal: productModalSlice,
        cartItems: cartItemsSlice,

        categoryData: categoryDataReducer,
        productData: productDataReducer
    }
})
