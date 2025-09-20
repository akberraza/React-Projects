import React from 'react'
import { Button } from 'antd'

function ClockButton({onClick}) {
  return (
      <Button type='primary' onClick={onClick}>
        Show Current Time
      </Button>
  )
}

export default ClockButton