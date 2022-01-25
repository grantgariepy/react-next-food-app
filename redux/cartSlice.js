import { createSlice, createSlice } from "@reduxjs/toolkit"

const createSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state)=>{
            state = initialState;
        }
    }
});

export const {addProduct, reset} = createSlice.actions;
export default createSlice.reducer;