import React from 'react'
import './style.scss'
import { useDispatch } from 'react-redux'
import { baiTapMovieBookingActions } from '../Store/baiTapMovieBooking/slice'

const Chair = ({ghe}) => {
  const dispatch = useDispatch()
  return (
    <div key={ghe.soghe} className='Chair mt-3' onClick={() => {
      dispatch(baiTapMovieBookingActions.setChairBooking(123))
    }}>{ghe.soGhe}</div>
  )
}

export default Chair