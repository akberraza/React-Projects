import React, { useState } from 'react'
import { Card } from 'antd'
import ClockButton from './Components/ClockButton'
import ClockDisplay from './Components/ClockDisplay'

function SimpleClock() {

  const [time, settime] = useState('')

  const showTime = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      settime(currentTime);
  }

  return (
    <div style={{textAlign: 'center'}}>

      <h1 style={{marginTop: 60}}>Simple Clock App</h1>

      <Card
         title='⏰ Simple Clock'
         style={{
          maxWidth: 400,
          margin: 'auto',
          padding: 20,
          borderRadius: 12,
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
         }}
      >

        <ClockButton onClick={showTime} />
        
        <ClockDisplay time={time} />

      </Card>
      
    </div>
  )
}

export default SimpleClock