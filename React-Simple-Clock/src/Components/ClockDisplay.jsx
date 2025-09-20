import React from 'react'
import { Statistic } from 'antd'

function ClockDisplay({time}) {

  if(!time) return null

  return (
    <div style={{marginTop: 20}}>

     <Statistic  title='Current Time' value={time}  />

    </div>
  )
}

export default ClockDisplay