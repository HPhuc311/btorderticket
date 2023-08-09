import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chairBookings: [],
}

const baiTapMovieBookingSlice = createSlice({
    name: 'baiTapMovieBooking',
    initialState,
    reducers: {
        setChairBooking: (state,actions) => {
            console.log('actions', actions)

        }
    },
    extraReducers: () => {}, // xử lý action bất đồng bộ (call API)
})

export const { reducer: baiTapMovieBookingReducer, actions: baiTapMovieBookingActions } =
    baiTapMovieBookingSlice
