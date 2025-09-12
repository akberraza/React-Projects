import React from 'react'
import { Button, Space } from 'antd'


function CounteButton({count, onIncrement, onDecrement, onReset}) {
  return (
    
    <Space>
    
     <Button type='primary' onClick={onIncrement} >Increment</Button>

     <Button onClick={onDecrement} disabled={count === 0}>Decrement</Button>

     <Button danger onClick={onReset}>Reset</Button>


    </Space>

  )
}

export default CounteButton