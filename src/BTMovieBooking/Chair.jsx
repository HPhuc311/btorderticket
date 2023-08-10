import React from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapMovieBookingActions } from '../Store/baiTapMovieBooking/slice'
import cn from 'classnames'


const Chair = ({ghe}) => {
  const dispatch = useDispatch()

  const {chairBookings,chairBookeds} = useSelector((state) =>state.baiTapMovieBooking)
  // console.log('chairBookings', chairBookings)


  return (
    <div key={ghe.soghe} className={cn('Chair mt-3', 
    {booking: chairBookings.find(chair => chair.soGhe === ghe.soGhe),
    booked: chairBookeds.find(chair => chair.soGhe === ghe.soGhe)})} onClick={() => {
      dispatch(baiTapMovieBookingActions.setChairBooking(ghe))
    }}>{ghe.soGhe}</div>
  )
}

export default Chair