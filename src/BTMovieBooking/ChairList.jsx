import React from 'react'
import Chair from './Chair'
import cn from 'classnames'

const ChairList = ({data}) => {
  return (
    <div>
        {
            data.map((hangGhe) => {
                return <div key={hangGhe.hang} className={cn('d-flex gap-3')} style={{justifyContent: 'center', alignItems: 'center', }}>
                     <p  style={{width: 30, color: 'yellow', fontSize: '20px'}}>{hangGhe.hang}</p>
                        {
                            hangGhe.danhSachGhe.map((ghe) => {
                                return <Chair className={cn({disabled: !hangGhe.hang})} key={ghe.soGhe} ghe={ghe}></Chair>
                            })
                        }
                </div>
            })
        }
    </div>
  )
}

export default ChairList