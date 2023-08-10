import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chairBookings: [],
    chairBookeds: []
}

const baiTapMovieBookingSlice = createSlice({
    name: 'baiTapMovieBooking',
    initialState,
    reducers: {
        setChairBooking: (state,action) => {

            // Kiểm tra vé có tồn trong mảng chairBookings không
            const index = state.chairBookings.findIndex(item => item.soGhe === action.payload.soGhe)

            // Nếu có thì sẽ xoá nó
            if(index !== -1){
                state.chairBookings.splice(index,1)
            // Nếu không thì sẽ push nó vào
            }else{
                state.chairBookings.push(action.payload)
            }
            // immerjs
        },
        setChairBookeds: (state, {payload}) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }
    },
    extraReducers: () => {}, // xử lý action bất đồng bộ (call API)
})

export const { reducer: baiTapMovieBookingReducer, actions: baiTapMovieBookingActions } =
    baiTapMovieBookingSlice
