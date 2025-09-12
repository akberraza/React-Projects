import React from 'react'
import { Typography } from 'antd'

let {Title} = Typography;

function CounterDisplay({count}) {
  return (
    
    <Title level={2}>Counter: {count}</Title>

  )
}

export default CounterDisplay