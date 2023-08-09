import React from 'react'
import data from './data.json'
import ChairList from './ChairList'
import Result from './Result'


const BTMovieBooking = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-8">
                <div className="p-2 fs-4 bg-dark text-white text-center mb-3">Screen</div>
                <ChairList data={data}></ChairList>
            </div>
            <div className="col-4">
                <Result></Result>
            </div>
        </div>
    </div>
  )
}

export default BTMovieBooking