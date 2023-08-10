import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapMovieBookingActions } from '../Store/baiTapMovieBooking/slice'

const Result = () => {
    const dispatch = useDispatch()
    const {chairBookings} = useSelector(state => state.baiTapMovieBooking)
    console.log('chairBookings', chairBookings)

    return (
        <div>
            <h2 className="mt-5">Danh sách ghế bạn chọn</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế đang chon</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế chưa đặt</p>
                </div>
            </div>

            <table className='table mt'>
                <thead>
                    <tr>
                        <th className='text-start'>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chairBookings.map(chair => (
                            <tr key={chair.soGhe}>
                                <td className='text-start'>{chair.soGhe}</td>
                                <td>{chair.gia}</td>
                                <td className='text-danger fw-bold fs-4' style={{cursor: 'pointer'}} onClick={() => {
                                    dispatch(baiTapMovieBookingActions.setChairBooking(chair))
                                }}> X</td>
                            </tr>
                        ))}
                    <tr>
                        <td className='text-start'>Tổng tiền thanh toán</td>
                        <td >
                            {
                                chairBookings.reduce((total, chair) => {
                                    return (total += chair.gia)
                                },0)
                            }                            
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success mt-3' onClick={() => {
                dispatch(baiTapMovieBookingActions.setChairBookeds())
            }}>Thanh toán</button>
        </div>
    )
}

export default Result
